#webpack 学习

### 基础
### Webpack
  是一个模块打包器。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。

Webpack 本身只能处理原生的 JavaScript 模块，但是 loader 转换器可以将各种类型的资源转换成 JavaScript 模块。这样，任何资源都可以成为 Webpack 可以处理的模块。


Webpack 会分析入口文件，解析包含依赖关系的各个文件。这些文件（模块）都打包到 bundle.js 。Webpack 会给每个模块分配一个唯一的 id 并通过这个 id 索引和访问模块。在页面启动时，会先执行 

###loader：
Loader 可以理解为是模块和资源的转换器，它本身是一个函数，接受源文件作为参数，返回转换的结果。这样，我们就可以通过 require 来加载任何类型的模块或文件，比如 CoffeeScript、 JSX、 LESS 或图片。

    webpack entry.js bundle.js --module-bind 'css=style-loader!css-loader’


###配置文件
Webpack在执行的时候，除了在命令行传入参数，还可以通过指定的配置文件来执行。默认情况下，会搜索当前目录的 webpack.config.js 文件，这个文件是一个 node.js 模块，返回一个 json 格式的配置信息对象，或者通过 --config 选项来指定配置文件。

简单的例子：
    
    var webpack = require('webpack')
    module.exports = {
      entry: './entry.js',
      output: {
        path: __dirname,
        filename: 'bundle.js'
      },
      module: {
        loaders: [
          {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
      }
    }


### webpack-dev-server
在全局安装一个webpack-dev-server
将在 localhost:8080 启动一个 express 静态资源 web 服务器，并且会以监听模式自动运行 webpack，就是我们的项目一修改，他会自动打包

    webpack-dev-server --progress —colors


debugger方法：

     --display-error-details

当引入通过 npm 安装的 node.js 模块时，可能出现找不到依赖的错误。当出现 Node.js 模块依赖查找失败的时候，可以尝试设置 `resolve.fallback` 和 `resolveLoader.fallback`来解决问题

    module.exports = {
      resolve: { fallback: path.join(__dirname, "node_modules") },
      resolveLoader: { fallback: path.join(__dirname, "node_modules") }
      };