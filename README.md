基于antd构建的react常用组件库：xmzbase


### 主要目录和文件说明

- components/ 组件目录，每个组件目录里包含组件代码、demo和说明文档（以md格式编写）
- dist/ 组件输出，可script、link标签引用使用
- lib/ 组件输出，CommonJs风格
- es/ 组件输出，ES6风格
- site/ 本工程启动代码
- CHANGELOG.zh-CN.md 更新日志

### 命令集

- `cnpm install` 下载依赖
- `npm run dist` 打包编译组件到dist目录
- `npm run compile` 编译生成lib和es目录
- `npm run pub` 发布到npm库，会自动执行dist和compile命令
- `npm run start` 启动本工程

