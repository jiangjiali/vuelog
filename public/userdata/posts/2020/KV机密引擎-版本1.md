title: KV机密引擎 - 版本1
------------------------------------

<!-- zh-CN:+ -->
“kv”机密引擎用于在为保险库配置的物理存储中存储任意机密。

写入“kv”后端中的键将替换旧值；子字段不会合并在一起。

键名必须始终是字符串。如果您直接通过CLI编写非字符串值，它们将被转换为字符串。但是，您可以通过从JSON文件或使用HTTP API 将键/值对写入到安全库来保留非字符串值。

此机密引擎尊重ACL策略中“创建”和“更新”功能之间的区别。

**注意**：路径和密钥名称不会被混淆或加密；只有在密钥上设置的值才是。不应将敏感信息存储为机密路径的一部分。

安装
----------------

要启用版本1 kv存储：

```
vault secrets enable -version=1 kv

```

使用
----------------

在配置机密引擎并且用户/计算机具有具有适当权限的安全库令牌之后，它可以生成凭据。“kv”机密引擎允许使用任意值写入密钥。

1.  写入任意数据：
    
    ```
    $ vault kv put kv/my-secret my-value=s3cr3t
    Success! Data written to: kv/my-secret
    
    ```
    
2.  读取任意数据：
    
    ```
    $ vault kv get kv/my-secret
    Key                 Value
    ---                 -----
    my-value            s3cr3t
    
    ```
    
3.  列出键：
    
    ```
    $ vault kv list kv/
    Keys
    ----
    my-secret
    
    ```
    
4.  删除键：
    
    ```
    $ vault kv delete kv/my-secret
    Success! Data deleted (if it existed) at: kv/my-secret
    
    ```
    

TTLs
--------------

与其他机密引擎不同，KV机密引擎不会在过期时强制TTL。相反，“lease_duration”是一个提示，提示消费者应该多久检查一次新值。

如果提供“ttl”密钥，KV机密引擎将使用此值作为租约期限：

```
$ vault kv put kv/my-secret ttl=30m my-value=s3cr3t
Success! Data written to: kv/my-secret

```

即使设置了“ttl”，机密引擎也不会自行删除数据。“ttl”键只是警报。

读取带有“ttl”的值时，“ttl”键和“刷新间隔”都将反映该值：

```
$ vault kv get kv/my-secret
Key                 Value
---                 -----
my-value            s3cr3t
ttl                 30m

```
<!-- zh-CN:- -->

<!-- en-US:+ -->
The "kv" secret engine is used to store arbitrary secrets in the physical storage configured for the vault.

The key written in the "kv" backend will replace the old value; the subfields will not be merged together.

The key name must always be a string. If you write non-string values ​​directly through the CLI, they will be converted to strings. However, you can preserve non-string values ​​by writing key/value pairs to the secure library from a JSON file or using HTTP API.

This confidential engine respects the difference between "create" and "update" functions in ACL policies.

**Note**: The path and key name will not be confused or encrypted; only the value set on the key is. Sensitive information should not be stored as part of a confidential path.

installation
----------------

To enable version 1 kv storage:

```
vault secrets enable -version=1 kv

```

use
----------------

After the secret engine is configured and the user/computer has a security library token with appropriate permissions, it can generate credentials. The "kv" secret engine allows the key to be written with any value.

1. Write arbitrary data:
    
    ```
    $ vault kv put kv/my-secret my-value=s3cr3t
    Success! Data written to: kv/my-secret
    
    ```
    
2. Read arbitrary data:
    
    ```
    $ vault kv get kv/my-secret
    Key Value
    --- -----
    my-value s3cr3t
    
    ```
    
3. List the keys:
    
    ```
    $ vault kv list kv/
    Keys
    ----
    my-secret
    
    ```
    
4. Delete key:
    
    ```
    $ vault kv delete kv/my-secret
    Success! Data deleted (if it existed) at: kv/my-secret
    
    ```
    

TTLs
--------------

Unlike other secret engines, KV secret engine will not force TTL when it expires. On the contrary, "lease_duration" is a reminder of how often the consumer should check the new value.

If the "ttl" key is provided, the KV secret engine will use this value as the lease term:

```
$ vault kv put kv/my-secret ttl=30m my-value=s3cr3t
Success! Data written to: kv/my-secret

```

Even if "ttl" is set, the confidential engine will not delete data by itself. The "ttl" key is just an alarm.

When reading a value with "ttl", both the "ttl" key and the "refresh interval" will reflect the value:

```
$ vault kv get kv/my-secret
Key Value
--- -----
my-value s3cr3t
ttl 30m

```
<!-- en-US:- -->