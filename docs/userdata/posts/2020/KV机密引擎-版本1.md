title: KV机密引擎 - 版本1
------------------------------------

<!-- zh-CN:+ -->
“kv”机密引擎用于在为保险库配置的物理存储中存储任意机密。

写入“kv”后端中的键将替换旧值；子字段不会合并在一起。

键名必须始终是字符串。如果您直接通过CLI编写非字符串值，它们将被转换为字符串。但是，您可以通过从JSON文件或使用HTTP API 将键/值对写入到安全库来保留非字符串值。

此机密引擎尊重ACL策略中“创建”和“更新”功能之间的区别。

**注意**：路径和密钥名称不会被混淆或加密；只有在密钥上设置的值才是。不应将敏感信息存储为机密路径的一部分。

[»](#安装)安装
----------------

要启用版本1 kv存储：

```
vault secrets enable -version=1 kv

```

[»](#使用)使用
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
    

[»](#TTLs)TTLs
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