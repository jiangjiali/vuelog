title: UserPass 身份验证方法
------------------------------------
<!-- zh-CN:+ -->
“userpass”身份验证方法允许用户使用用户名和密码组合对安全库进行身份验证。

用户名/密码组合使用“users/”路径直接配置到认证方法。此方法无法从外部源读取用户名和密码。

该方法将所有提交的用户名都小写，例如“Mary”和“mary”是同一个条目。

身份验证
----------------------------------

### 通过CLI

```
$ vault login -method=userpass \
    username=mitchellh \
    password=foo

```

### 通过API

```
$ curl \
    --request POST \
    --data '{"password": "foo"}' \
    http://127.0.0.1:8200/v1/auth/userpass/login/mitchellh

```

响应将包含位于的令牌`auth.client_token`:

```
{
  "lease_id": "",
  "renewable": false,
  "lease_duration": 0,
  "data": null,
  "auth": {
    "client_token": "c4f280f6-fdb2-18eb-89d3-589e2e834cdb",
    "policies": ["admins"],
    "metadata": {
      "username": "mitchellh"
    },
    "lease_duration": 0,
    "renewable": false
  }
}

```

配置
--------------------------------

在用户或计算机可以进行身份验证之前，必须预先配置身份验证方法。这些步骤通常由操作员或配置管理工具完成。

1.  启用userpass身份验证方法：
    
    ```
    $ vault auth enable userpass
    
    ```
    
2.  使用允许进行身份验证的用户对其进行配置：
    
    ```
    $ vault write auth/userpass/users/mitchellh \
        password=foo \
        policies=admins
    
    ```
    
    这将创建一个新用户“mitchellh”，密码为“foo”，它将与“admins”策略相关联。这是唯一需要的配置。

<!-- zh-CN:- -->
