# e5-worker

部署在cloudflare workers上的worker程序，用于获取Microsoft 365的 `token`、`refresh_token`参数的工具，参见demo网站 [https://e5.vliu.icu/](https://e5.vliu.icu/)

需要准备的参数

- client id 应用程序(客户端) ID 
- client secret 证书和密码中设置的应用客户端密码



也可以直接使用此demo地址作为应用的Web 重定向URI



授权参考文档: [https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)