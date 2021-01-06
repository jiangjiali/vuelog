title: TOTP机密引擎
------------------------------------
<!-- zh-CN:+ -->
TOTP机密引擎根据TOTP标准生成基于时间的凭证。机密引擎还可以用来生成一个新的密钥，并验证由该密钥生成的密码。

TOTP机密引擎既可以充当生成器（如Google Authenticator）也可以充当提供者。

[»](#作为生成器)作为生成器
----------------------------------

TOTP机密引擎可以充当TOTP代码生成器。在这种模式下，它可以取代传统的TOTP生成器，比如Google Authenticator。它提供了额外的安全层，因为生成代码的能力受到策略的保护，并且整个过程都经过审核。

### [»](#安装)安装

大多数秘密引擎必须事先配置好才能执行其功能。这些步骤通常由操作员或配置管理工具完成。

1.  启用TOTP机密引擎：
    
    ```
    $ vault secrets enable totp
    Success! Enabled the totp secrets engine at: totp/
    
    ```
    
    默认情况下，机密引擎将安装在引擎的名称处。要在其他路径上启用机密引擎，请使用“-path”参数。
    
2.  配置命名密钥。此密钥的名称将作为其用途的人工标识符。
    
    ```
    $ vault write totp/keys/my-key \
        url="otpauth://totp/Vault:test@test.com?secret=Y64VEVMBTSXCYIWRSHRNDZW62MPGVU2G&issuer=Vault"
    Success! Data written to: totp/keys/my-key
    
    ```
    
    “url”对应于第三方服务提供的条形码中的密钥或值。
    

### [»](#使用)使用

在配置机密引擎并且用户/计算机具有具有适当权限的安全库令牌之后，它可以生成凭据。

1.  通过从具有密钥名称的“/code”终结点读取，生成新的基于时间的OTP：
    
    ```
    $ vault read totp/code/my-key
    Key     Value
    ---     -----
    code    260610
    
    ```
    
    使用ACL，可以限制使用TOTP机密引擎，以便受信任的操作员可以管理密钥定义，并且用户和应用程序都受到允许读取的凭据的限制。
    

[»](#作为提供者)作为提供者
--------------------------------

TOTP机密引擎也可以充当TOTP提供者。在这种模式下，它可以用来生成新的密钥，并验证使用这些密钥生成的密码。

### [»](#安装-1)安装

大多数秘密引擎必须事先配置好才能执行其功能。这些步骤通常由操作员或配置管理工具完成。

1.  启用TOTP机密引擎：
    
    ```
    $ vault secrets enable totp
    Success! Enabled the totp secrets engine at: totp/
    
    ```
    
    默认情况下，机密引擎将安装在引擎的名称处。要在其他路径上启用机密引擎，请使用“-path”参数。
    
2.  使用“generate”选项创建命名键。这将告诉安全库作为提供程序：
    
    ```
    $ vault write totp/keys/my-user \
        generate=true \
        issuer=Vault \
        account_name=user@test.com
    
    Key        Value
    ---        -----
    barcode    iVBORw0KGgoAAAANSUhEUgAAAMgAAADIEAAAAADYoy0BA...
    url        otpauth://totp/Vault:user@test.com?algorithm=SHA1&digits=6&issuer=Vault&period=30&secret=V7MBSK324I7KF6KVW34NDFH2GYHIF6JY
    
    ```
    
    响应包括base64编码的条形码和OTP url，两者相当。将这些给正在使用TOTP进行身份验证的用户。
    

### [»](#使用-1)使用

1.  作为用户，验证第三方应用程序生成的TOTP代码：
    
    ```
    $ vault write totp/code/my-user code=886531
    Key      Value
    ---      -----
    valid    true
    
    ```

<!-- zh-CN:- -->