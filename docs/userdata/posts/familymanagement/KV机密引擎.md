title: KV机密引擎
------------------------------------

<!-- zh-CN:+ -->
“kv”机密引擎用于在为保险库配置的物理存储中存储任意机密。这个后端可以以两种模式之一运行。它可以是为键存储一个值的通用键值存储区。可以启用版本控制，并为每个密钥存储可配置的版本数。

KV版本1
------------------------------

运行“kv”机密后端非版本化时，只保留最近写入的密钥值。无版本的“kv”的好处是减少了每个键的存储大小，因为不存储额外的元数据或历史记录。此外，以这种方式配置到后端的请求将更具性能，因为对于任何给定的请求，存储调用将更少，并且没有锁定。

KV版本2
------------------------------

运行“kv”后端的v2时，密钥可以保留可配置的版本数。默认为10个版本。可以检索旧版本的元数据和数据。此外，可以使用检查和设置操作来避免无意中覆盖数据。

删除版本时，不会删除基础数据，而是将其标记为已删除。删除的版本可以恢复删除。要永久删除版本的数据，可以使用destroy命令或API端点。此外，可以通过在metadata命令或API端点上删除键的所有版本和元数据。这些操作中的每一个都可以进行不同的ACL，从而限制谁拥有软删除、取消删除或完全删除数据的权限。
<!-- zh-CN:- -->

<!-- en-US:+ -->
The "kv" secret engine is used to store arbitrary secrets in the physical storage configured for the vault. This backend can run in one of two modes. It can be a general key-value store that stores a value for the key. You can enable version control and store a configurable number of versions for each key.

KV version 1
------------------------------

When running the "kv" secret backend without versioning, only the most recently written key value is retained. The benefit of the versionless "kv" is that it reduces the storage size of each key because no additional metadata or history is stored. In addition, requests configured to the backend in this way will be more performant, because for any given request, there will be fewer storage calls and no locks.

KV version 2
------------------------------

When running v2 of the "kv" backend, the key can retain a configurable number of versions. The default is 10 versions. The metadata and data of the old version can be retrieved. In addition, you can use check and set operations to avoid accidentally overwriting data.

When deleting a version, the underlying data will not be deleted, but will be marked as deleted. The deleted version can be undeleted. To permanently delete the version data, you can use the destroy command or API endpoint. In addition, all versions and metadata of the key can be deleted via metadata commands or API endpoints. Each of these operations can carry out different ACLs to restrict who has the authority to soft delete, undelete, or delete data completely.
<!-- en-US:- -->