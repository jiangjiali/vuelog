title: KV机密引擎 - 版本2
category: familymanagement
date: 2020-10-20
------------------------------------

<!-- zh-CN:+ -->
“kv”机密引擎用于在为保险库配置的物理存储中存储任意机密。

键名必须始终是字符串。如果您直接通过CLI编写非字符串值，它们将被转换为字符串。但是，您可以通过从JSON文件或使用HTTP API 将键/值对写入到安全库来保留非字符串值。

此机密引擎尊重ACL策略中“创建”和“更新”功能之间的区别。

[»](#安装)安装
----------------

大多数秘密引擎必须事先配置好才能执行其功能。这些步骤通常由操作员或配置管理工具完成。

v2`kv`机密引擎可以通过以下方式启用：

```
$ vault secrets enable -version=2 kv

```

或者，您可以将“kv-v2”作为机密引擎类型：

```
$ vault secrets enable kv-v2

```

另外，当运行开发模式服务器时，v2`kv` secret引擎默认在路径`secret/`处启用（对于非dev服务器，当前是v1）。它可以在不同的路径上禁用、移动或启用多次。KV机密引擎的每一个实例都是独立的和独特的。

[»](#从版本1升级)从版本1升级
------------------------------------------------------

可以通过CLI或API将现有的1 kv存储升级到2 kv存储，如下所示。这将启动一个升级过程，将现有的键/值数据升级为版本控制的格式。在此过程中无法访问装载。这个过程可能需要很长的时间，所以要有相应的计划。

一旦升级到版本2，以前访问数据的路径将不再足够。您将需要调整用户策略以添加对版本2路径的访问权限，详细信息请参见下面的ACL规则部分。同样，一旦kv数据升级到版本2，用户/应用程序将需要更新它们与kv数据交互的路径。

可以使用CLI命令将现有的1 kv版本升级到2 kv存储：

```
$ vault kv enable-versioning secret/
Success! Tuned the secrets engine at: secret/

```

或通过API：

```
$ cat payload.json
{
  "options": {
      "version": "2"
  }
}

$ curl \
    --header "X-Vault-Token: ..." \
    --request POST \
    --data @payload.json \
    http://127.0.0.1:8200/v1/sys/mounts/secret/tune

```

[»](#ACL策略)ACL策略
------------------------

版本2 kv存储使用前缀API，这与版本1 API不同。从1 kv版本升级之前，应更改ACL策略。此外，版本2 API中的不同路径也可以进行不同的访问。

写入和读取版本都以“data/”路径作为前缀。该政策适用于1 kv版本：
```
path "secret/dev/team-1/*" {
  capabilities = ["create", "update", "read"]
}

```

应改为：

```
path "secret/data/dev/team-1/*" {
  capabilities = ["create", "update", "read"]
}

```

此后端有不同级别的数据删除。要授予策略删除密钥的最新版本的权限，请执行以下操作：

```
path "secret/data/dev/team-1/*" {
  capabilities = ["delete"]
}

```

要允许策略删除密钥的任何版本，请执行以下操作：

```
path "secret/delete/dev/team-1/*" {
  capabilities = ["update"]
}

```

要允许策略撤消删除数据，请执行以下操作：

```
path "secret/undelete/dev/team-1/*" {
  capabilities = ["update"]
}

```

要允许策略销毁版本，请执行以下操作：

```
path "secret/destroy/dev/team-1/*" {
  capabilities = ["update"]
}

```

要允许策略列出密钥，请执行以下操作：

```
path "secret/metadata/dev/team-1/*" {
  capabilities = ["list"]
}

```

要允许策略查看每个版本的元数据，请执行以下操作：

```
path "secret/metadata/dev/team-1/*" {
  capabilities = ["read"]
}

```

要允许策略永久删除密钥的所有版本和元数据，请执行以下操作：

```
path "secret/metadata/dev/team-1/*" {
  capabilities = ["delete"]
}

```

[»](#使用)使用
----------------

在配置机密引擎并且用户/计算机具有具有适当权限的保险库令牌之后，它可以生成凭据。“kv”机密引擎允许使用任意值写入密钥。

### [»](#写入/读取任意数据)写入/读取任意数据

1.  写入任意数据：
    
    ```
    $ vault kv put secret/my-secret my-value=s3cr3t
    Key              Value
    ---              -----
    created_time     2019-06-19T17:20:22.985303Z
    deletion_time    n/a
    destroyed        false
    version          1
    
    ```
    
2.  读取任意数据：
    
    ```
    $ vault kv get secret/my-secret
    ====== Metadata ======
    Key              Value
    ---              -----
    created_time     2019-06-19T17:20:22.985303Z
    deletion_time    n/a
    destroyed        false
    version          1
    
    ====== Data ======
    Key         Value
    ---         -----
    my-value    s3cr3t
    
    ```
    
3.  写另一个版本，以前的版本仍然可以访问。可以选择传递“-cas”标志来执行检查和设置操作。如果未设置，则允许写入。如果设置为“-cas=0”，则仅当密钥不存在时才允许写入。如果索引为非零，则只有当密钥的当前版本与cas参数中指定的版本匹配时，才允许写入。
    
    ```
    $ vault kv put -cas=1 secret/my-secret my-value=new-s3cr3t    
    
    ```
    
4.  现在读取将返回数据的最新版本：
    
    ```
    $ vault kv get secret/my-secret
    ====== Metadata ======
    Key              Value
    ---              -----
    created_time     2019-06-19T17:22:23.369372Z
    deletion_time    n/a
    destroyed        false
    version          2
    
    ====== Data ======
    Key         Value
    ---         -----
    my-value    new-s3cr3t
    
    ```
    
5.  可以使用“-version”标志访问以前的版本：
    
    ```
    $ vault kv get -version=1 secret/my-secret
    ====== Metadata ======
    Key              Value
    ---              -----
    created_time     2019-06-19T17:20:22.985303Z
    deletion_time    n/a
    destroyed        false
    version          1
    
    ====== Data ======
    Key         Value
    ---         -----
    my-value    s3cr3t
    
    ```
    

### [»](#删除和销毁数据)删除和销毁数据

删除数据时，标准的“vault kv delete”命令将执行软删除。它将把版本标记为已删除，并填充一个“deletion_time”时间戳。软删除不会从存储中删除基础版本数据，这允许恢复版本。“vault kv undelete”命令处理正在删除的版本。

只有当密钥的版本超过“最大版本”设置所允许的版本时，或使用“vault kv destroy”时，版本数据才会被永久删除。使用destroy命令时，底层版本数据将被删除，密钥元数据将被标记为已销毁。如果通过检查max versions来清理版本，那么版本元数据也将从键中删除。

有关详细信息，请参见以下命令：

1.  可以使用delete命令删除密钥的最新版本，这还需要一个“-versions”标志来删除以前的版本：
    
    ```
    $ vault kv delete secret/my-secret
    t
    
    ```
    
2.  可以取消删除版本：
    
    ```
    $ vault kv undelete -versions=2 secret/my-secret
    Success! Data written to: secret/undelete/my-secret
    
    $ vault kv get secret/my-secret
    ====== Metadata ======
    Key              Value
    ---              -----
    created_time     2019-06-19T17:23:21.834403Z
    deletion_time    n/a
    destroyed        false
    version          2
    
    ====== Data ======
    Key         Value
    ---         -----
    my-value    short-lived-s3cr3t
    
    ```
    
3.  销毁版本将永久删除基础数据：
    
    ```
    $ vault kv destroy -versions=2 secret/my-secret
    Success! Data written to: secret/destroy/my-secret
    
    ```
    

### [»](#健元数据)健元数据

可以使用metadata命令&API跟踪所有版本和关键元数据。删除元数据项将导致永久删除该项的所有元数据和版本。

有关详细信息，请参见以下命令：

1.  可以查看密钥的所有元数据和版本：
    
    ```
    $ vault kv metadata get secret/my-secret
    ========== Metadata ==========
    Key                     Value
    ---                     -----
    cas_required            false
    created_time            2019-06-19T17:20:22.985303Z
    current_version         2
    delete_version_after    0s
    max_versions            0
    oldest_version          0
    updated_time            2019-06-19T17:22:23.369372Z
    
    ====== Version 1 ======
    Key              Value
    ---              -----
    created_time     2019-06-19T17:20:22.985303Z
    deletion_time    n/a
    destroyed        false
    
    ====== Version 2 ======
    Key              Value
    ---              -----
    created_time     2019-06-19T17:22:23.369372Z
    deletion_time    n/a
    destroyed        true
    
    ```
    
2.  可以配置密钥的元数据设置：
    
    ```
    $ vault kv metadata put -max-versions 2 -delete-version-after="3h25m19s" secret/my-secret
    Success! Data written to: secret/metadata/my-secret
    
    ```
    
    设置后删除版本将仅应用于新版本。下次写入时将应用最大版本更改：
    
    ```
    $ vault kv put secret/my-secret my-value=newer-s3cr3t
    Key              Value
    ---              -----
    created_time     2019-06-19T17:31:16.662563Z
    deletion_time    2019-06-19T20:56:35.662563Z
    destroyed        false
    version          4
    
    ```
    
    一旦密钥的版本超过最大版本，则会清除最旧的版本：
    
    ```
    $ vault kv metadata get secret/my-secret
    ========== Metadata ==========
    Key                     Value
    ---                     -----
    cas_required            false
    created_time            2019-06-19T17:20:22.985303Z
    current_version         4
    delete_version_after    3h25m19s
    max_versions            2
    oldest_version          3
    updated_time            2019-06-19T17:31:16.662563Z
    
    ====== Version 3 ======
    Key              Value
    ---              -----
    created_time     2019-06-19T17:23:21.834403Z
    deletion_time    n/a
    destroyed        true
    
    ====== Version 4 ======
    Key              Value
    ---              -----
    created_time     2019-06-19T17:31:16.662563Z
    deletion_time    2019-06-19T20:56:35.662563Z
    destroyed        false
    
    ```
    
3.  永久删除密钥的所有元数据和版本：
    
    ```
    $ vault kv metadata delete secret/my-secret
    Success! Data deleted (if it existed) at: secret/metadata/my-secret
    
    ```
<!-- zh-CN:- -->