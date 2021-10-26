# semantic-release-miniprogram
一个用来执行小程序上传的 `semantic-release` 插件

| Step               | Description |
|--------------------|-------------|
| `publish`          | [上传小程序](https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html#%E4%B8%8A%E4%BC%A0) |


## 安装

```bash
$ npm install semantic-release-miniprogram -D
```

## 使用

这个插件可以配置在[**semantic-release** 配置文件](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "semantic-release-miniprogram"
  ]
}
```

## 配置

本插件需要小程序的项目配置和上传配置，配置参数参考[文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/ci.html#%E5%8F%82%E6%95%B0)，其中`version`、`desc`和`onProgressUpdate`不需要配置。配置方式如下：

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["semantic-release-miniprogram", {
      "project": {
        "appid": "123456789",
        "projectPath": ".",
      },
      "robot": 2
    }]
  ]
}

```
