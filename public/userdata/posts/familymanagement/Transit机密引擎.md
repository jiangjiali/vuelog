title: Transit机密引擎
------------------------------------
<!-- zh-CN:+ -->
Transit机密引擎处理传输中数据的加密功能。安全库不存储发送到机密引擎的数据。它也可以被视为“加密即服务”或“解密即服务”。transit机密引擎还可以对数据进行签名和验证；生成数据的哈希和hmac；并充当随机字节的源。

“transit”的主要用例是加密来自应用程序的数据，同时仍将加密数据存储在一些主数据存储中。这减轻了应用程序开发人员对正确加密/解密的负担，并将负担推到了保险库的操作人员身上。

支持密钥派生，通过基于用户提供的上下文值派生新密钥，允许同一密钥用于多种用途。在这种模式下，可以选择性地支持收敛加密，允许相同的输入值产生相同的密文。

数据密钥生成允许进程请求将给定位长度的高熵密钥返回给它们，并用命名密钥加密。通常，这也将以明文形式返回密钥，以便立即使用，但可以禁用此操作以满足审核要求。

工作集管理
--------------------------------------------------

传输引擎支持密钥的版本控制。早于密钥指定的“min_decryption_version”的密钥版本将被存档，其余密钥版本属于工作集。这是保持密钥加载速度的一个性能考虑因素，也是一个安全考虑因素：由于不允许解密旧版本的密钥，大多数用户无法解密与过时（但敏感）数据相对应的密文，但在紧急情况下，可以将“min_decryption”版本移回以允许合法解密。

当前，此存档存储在单个存储条目中。对于某些存储后端，尤其是那些使用Raft或Paxos实现HA功能的后端，频繁的轮换可能会导致归档的存储条目大小大于存储后端可以处理的大小。对于频繁的旋转需要，使用与时间范围（例如，五分钟周期与五个最接近的倍数相对应）相对应的命名关键点可以提供一个很好的替代方法，允许多个关键点同时处于活动状态，并且可以确定在任何给定时间决定使用哪个键。

健类型
------------------------

目前，transit机密引擎支持以下密钥类型（所有密钥类型还生成单独的HMAC密钥）：

*   aes128-gcm96: AES-GCM，具有128位AES密钥和96位nonce；支持加密、解密、密钥派生和收敛加密
*   aes256-gcm96: AES-GCM，256位AES密钥和96位nonce；支持加密、解密、密钥派生和收敛加密（默认）
*   chacha20-poly1305: ChaCha20-Poly1305，256位密钥；支持加密、解密、密钥派生和收敛加密
*   ed25519: Ed25519；支持签名、签名验证和密钥派生
*   ecdsa-p256: ECDSA使用曲线P-256；支持签名和签名验证
*   ecdsa-p384: ECDSA使用曲线P-384；支持签名和签名验证
*   ecdsa-p521: ECDSA使用曲线P-521；支持签名和签名验证
*   rsa-2048: 2048位RSA密钥；支持加密、解密、签名和签名验证
*   rsa-3072: 3072位RSA密钥；支持加密、解密、签名和签名验证
*   rsa-4096: 4096位RSA密钥；支持加密、解密、签名和签名验证

收敛加密
------------------------------------------------

收敛加密是一种模式，在这种模式下，同一组明文+上下文总是产生相同的密文。它通过使用密钥派生函数来派生密钥，也通过确定地派生nonce来实现。由于这些属性对于大小为2^256的密钥空间上的明文和密文的任何组合都是不同的，因此一次性重用的风险几乎为零。

这有许多实际用途。一种常见的使用模式是允许将值加密存储在数据库中，但对查找/查询的支持有限，因此可以从查询中返回特定字段具有相同值的行。

为了适应对算法的任何必要升级，过去支持不同版本的收敛加密：

*   版本1 要求客户机提供自己的nonce，这是非常灵活的，但是如果做得不正确会很危险。这仅在安全库v0.6.1中存在，使用此版本的密钥无法升级。
*   版本2 使用算法方法来推导参数。然而，所使用的算法容易受到脱机明文确认攻击，如果明文大小很小，攻击者可以使用暴力进行解密。使用版本2的密钥可以通过简单地执行旋转操作升级到新的密钥版本；然后可以针对新密钥版本重新捕获现有值，并将使用版本3算法。
*   版本3 使用了一种不同的算法，旨在抵抗脱机明文确认攻击。它类似于AES-SIV，因为它使用PRF从明文生成nonce。

安装
----------------

大多数秘密引擎必须事先配置好才能执行其功能。这些步骤通常由操作员或配置管理工具完成。

1.  启用transit机密引擎：
    
    ```
    $ vault secrets enable transit
    Success! Enabled the transit secrets engine at: transit/
    
    ```
    
    默认情况下，机密引擎将安装在引擎的名称处。要在其他路径上启用机密引擎，请使用“-path”参数。
    
2.  创建命名加密密钥：
    
    ```
    $ vault write -f transit/keys/my-key
    Success! Data written to: transit/keys/my-key
    
    ```
    
    通常每个应用程序都有自己的加密密钥。
    

使用
----------------

在配置机密引擎并且用户/计算机具有具有适当权限的保险库令牌之后，它可以使用此机密引擎。

1.  使用带有命名密钥的“/encrypt”终结点加密某些明文数据：
    
    **注意：**所有明文数据**必须是base64编码的**。这一要求的原因是，Vault不要求明文是“文本”。它可以是二进制文件，如PDF或图像。将此数据作为JSON有效负载的一部分，最简单的安全传输机制是对其进行base64编码。
    
    ```
    $ vault write transit/encrypt/my-key plaintext=$(base64 <<< \"my secret data\")
    
    Key           Value
    ---           -----
    ciphertext    vault:v1:8SDd3WHDOjf7mq69CyCqYjBXAiQQAVZRkFM13ok481zoCmHnSeDX9vyf7w==
    
    ```
    
    返回的密文以`vault:v1:`. 第一个前缀（`vault`）表示它已被安全库包装。“v1”表示密钥版本1用于加密明文；因此，当您旋转密钥时，安全库知道要使用哪个版本进行解密。其余的是初始化向量（IV）和密文的base64级联。
    
    请注意，安全库不存储任何这些数据。调用者负责存储加密密文。当调用方需要明文时，它必须将密文提供回保险库以解密该值。
    
    为了防止拒绝服务攻击，安全库HTTP API的最大请求大小为32MB。可在“每个侦听器”块中对每个“安全库”配置进行调整。
    
2.  使用带命名密钥的“/decrypt”终结点解密数据段：
    
    ```
    $ vault write transit/decrypt/my-key ciphertext=vault:v1:8SDd3WHDOjf7mq69CyCqYjBXAiQQAVZRkFM13ok481zoCmHnSeDX9vyf7w==
    
    Key          Value
    ---          -----
    plaintext    bXkgc2VjcmV0IGRhdGEK
    
    ```
    
    得到的数据是base64编码的（有关原因的详细信息，请参见上面的注释）。对其进行解码以获得原始明文：
    
    ```
    $ base64 --decode <<< "bXkgc2VjcmV0IGRhdGEK"
    my secret data
    
    ```
    
    也可以在一个命令中使用一些聪明的shell脚本编写此解密脚本：
    
    ```
    $ vault write -field=plaintext transit/decrypt/my-key ciphertext=... | base64 --decode
    my secret data
    
    ```
    
    使用acl，可以限制使用transit机密引擎，以便受信任的操作员可以管理命名密钥，并且应用程序只能使用它们需要访问的命名密钥来加密或解密。
    
3.  旋转基础加密密钥。这将生成一个新的加密密钥，并将其添加到指定密钥的密钥环中：
    
    ```
    $ vault write -f transit/keys/my-key/rotate
    Success! Data written to: transit/keys/my-key/rotate
    
    ```
    
    将来的加密将使用这个新密钥。由于使用了密钥环，旧数据仍然可以解密。
    
4.  将已加密的数据升级为新密钥。安全库将使用密钥环中适当的密钥对值进行解密，然后使用密钥环中最新的密钥对生成的明文进行加密。
    
    ```
    $ vault write transit/rewrap/my-key ciphertext=vault:v1:8SDd3WHDOjf7mq69CyCqYjBXAiQQAVZRkFM13ok481zoCmHnSeDX9vyf7w==
    
    Key           Value
    ---           -----
    ciphertext    vault:v2:0VHTTBb2EyyNYHsa3XiXsvXOQSLKulH+NqS4eRZdtc2TwQCxqJ7PUipvqQ==
    
    ```
    
    此进程**不会**显示明文数据。因此，保险库策略可以授予几乎不受信任的进程“重写”加密数据的能力，因为该进程无法访问明文数据。

<!-- zh-CN:- -->

<!-- en-US:+ -->
The Transit confidential engine handles the encryption function of data in transit. The security library does not store data sent to the confidential engine. It can also be viewed as "encryption as a service" or "decryption as a service." The transit secret engine can also sign and verify data; generate hash and hmac of data; and act as a source of random bytes.

The main use case of "transit" is to encrypt data from applications while still storing the encrypted data in some primary data store. This relieves the application developer of the burden on correct encryption/decryption and puts the burden on the vault operator.

Support key derivation, by deriving a new key based on the context value provided by the user, allowing the same key to be used for multiple purposes. In this mode, convergent encryption can be selectively supported, allowing the same input value to produce the same ciphertext.

Data key generation allows processes to request that a high-entropy key of a given length be returned to them and encrypted with a named key. Usually, this will also return the key in clear text for immediate use, but this can be disabled to meet audit requirements.

Working set management
--------------------------------------------------

The transmission engine supports version control of keys. Key versions earlier than the "min_decryption_version" specified by the key will be archived, and the remaining key versions belong to the working set. This is a performance consideration to maintain the key loading speed, as well as a security consideration: since it is not allowed to decrypt the old version of the key, most users cannot decrypt the ciphertext corresponding to the outdated (but sensitive) data, but in emergency In this case, the "min_decryption" version can be moved back to allow legal decryption.

Currently, this archive is stored in a single storage entry. For some storage backends, especially those that use Raft or Paxos to implement HA functionality, frequent rotation may cause the archived storage item size to be larger than the storage backend can handle. For frequent rotation needs, using named keypoints corresponding to the time range (for example, a five-minute period corresponds to the five closest multiples) can provide a good alternative, allowing multiple keypoints to be active at the same time , And can determine which key to use at any given time.

Kin type
------------------------

Currently, the transit secret engine supports the following key types (all key types also generate separate HMAC keys):

* aes128-gcm96: AES-GCM, with 128-bit AES key and 96-bit nonce; supports encryption, decryption, key derivation and convergence encryption
* aes256-gcm96: AES-GCM, 256-bit AES key and 96-bit nonce; support encryption, decryption, key derivation and convergence encryption (default)
* chacha20-poly1305: ChaCha20-Poly1305, 256-bit key; supports encryption, decryption, key derivation and convergence encryption
* ed25519: Ed25519; supports signature, signature verification and key derivation
* ecdsa-p256: ECDSA uses curve P-256; supports signature and signature verification
* ecdsa-p384: ECDSA uses curve P-384; supports signature and signature verification
* ecdsa-p521: ECDSA uses curve P-521; supports signature and signature verification
* rsa-2048: 2048-bit RSA key; supports encryption, decryption, signature and signature verification
* rsa-3072: 3072-bit RSA key; supports encryption, decryption, signature and signature verification
* rsa-4096: 4096-bit RSA key; supports encryption, decryption, signature and signature verification

Convergent encryption
------------------------------------------------

Convergent encryption is a mode. In this mode, the same set of plaintext + context always produces the same ciphertext. It derives the key by using the key derivation function, and is also realized by deriving the nonce deterministically. Since these attributes are different for any combination of plaintext and ciphertext on a key space of size 2^256, the risk of one-time reuse is almost zero.

This has many practical uses. A common usage pattern is to allow values ​​to be encrypted and stored in the database, but the support for lookups/queries is limited, so rows with the same value for a specific field can be returned from the query.

In order to adapt to any necessary upgrades to the algorithm, different versions of convergence encryption were supported in the past:

* Version 1 requires the client to provide its own nonce, which is very flexible, but it will be dangerous if done incorrectly. This only exists in the security library v0.6.1 and cannot be upgraded using this version of the key.
* Version 2 uses algorithmic methods to derive parameters. However, the algorithm used is vulnerable to offline plaintext confirmation attacks. If the plaintext size is small, the attacker can use brute force to decrypt it. The key using version 2 can be upgraded to a new key version by simply performing a rotation operation; then the existing value can be recaptured for the new key version, and the version 3 algorithm will be used.
* Version 3 uses a different algorithm to resist offline plaintext confirmation attacks. It is similar to AES-SIV because it uses PRF to generate nonces from plaintext.

installation
----------------

Most secret engines must be configured in advance to perform their functions. These steps are usually completed by operators or configuration management tools.

1. Enable the transit secret engine:
    
    ```
    $ vault secrets enable transit
    Success! Enabled the transit secrets engine at: transit/
    
    ```
    
    By default, the confidential engine will be installed at the name of the engine. To enable the secret engine on other paths, use the "-path" parameter.
    
2. Create a named encryption key:
    
    ```
    $ vault write -f transit/keys/my-key
    Success! Data written to: transit/keys/my-key
    
    ```
    
    Usually each application has its own encryption key.
    

use
----------------

After the confidential engine is configured and the user/computer has a vault token with appropriate permissions, it can use this confidential engine.

1. Use the "/encrypt" endpoint with a named key to encrypt some plaintext data:
    
    **Note: **All plaintext data** must be base64 encoded**. The reason for this requirement is that Vault does not require the plaintext to be "text". It can be a binary file, such as a PDF or an image. Using this data as part of the JSON payload, the simplest secure transmission mechanism is to base64 encode it.
    
    ```
    $ vault write transit/encrypt/my-key plaintext=$(base64 <<< \"my secret data\")
    
    Key Value
    --- -----
    ciphertext vault:v1:8SDd3WHDOjf7mq69CyCqYjBXAiQQAVZRkFM13ok481zoCmHnSeDX9vyf7w==
    
    ```
    
    The returned ciphertext is `vault:v1:`. The first prefix (`vault`) indicates that it has been packaged by the security library. "V1" means that the key version 1 is used to encrypt the plaintext; therefore, when you rotate the key, the security library knows which version to use for decryption. The rest is the base64 concatenation of the initialization vector (IV) and the ciphertext.
    
    Please note that the security library does not store any of these data. The caller is responsible for storing the encrypted ciphertext. When the caller needs the plaintext, it must provide the ciphertext back to the vault to decrypt the value.
    
    To prevent denial of service attacks, the maximum request size of the security library HTTP API is 32MB. Each "security library" configuration can be adjusted in the "each listener" block.
    
2. Decrypt the data segment using the "/decrypt" endpoint with a named key:
    
    ```
    $ vault write transit/decrypt/my-key ciphertext=vault:v1:8SDd3WHDOjf7mq69CyCqYjBXAiQQAVZRkFM13ok481zoCmHnSeDX9vyf7w==
    
    Key Value
    --- -----
    plaintext bXkgc2VjcmV0IGRhdGEK
    
    ```
    
    The resulting data is base64 encoded (see the note above for details of the reason). Decode it to get the original plaintext:
    
    ```
    $ base64 --decode <<< "bXkgc2VjcmV0IGRhdGEK"
    my secret data
    
    ```
    
    You can also use some clever shell scripts to write this decryption script in one command:
    
    ```
    $ vault write -field=plaintext transit/decrypt/my-key ciphertext=... | base64 --decode
    my secret data
    
    ```
    
    With acl, the use of the transit secret engine can be restricted so that trusted operators can manage named keys, and applications can only use the named keys they need to access to encrypt or decrypt.
    
3. Rotate the base encryption key. This will generate a new encryption key and add it to the key ring of the specified key:
    
    ```
    $ vault write -f transit/keys/my-key/rotate
    Success! Data written to: transit/keys/my-key/rotate
    
    ```
    
    Future encryption will use this new key. Due to the use of the key ring, the old data can still be decrypted.
    
4. Upgrade the encrypted data to a new key. The security library will use the appropriate key in the key ring to decrypt the value, and then use the latest key in the key ring to encrypt the generated plaintext.
    
    ```
    $ vault write transit/rewrap/my-key ciphertext=vault:v1:8SDd3WHDOjf7mq69CyCqYjBXAiQQAVZRkFM13ok481zoCmHnSeDX9vyf7w==
    
    Key Value
    --- -----
    ciphertext vault:v2:0VHTTBb2EyyNYHsa3XiXsvXOQSLKulH+NqS4eRZdtc2TwQCxqJ7PUipvqQ==
    
    ```
    
    This process **will not** display plaintext data. Therefore, the vault policy can grant a nearly untrusted process the ability to "rewrite" encrypted data because the process cannot access the plaintext data.
<!-- en-US:- -->