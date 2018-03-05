# angular4-webpack UI组件

>  非常简单的一个angular4 + webpack的UI组件库，拓展了部分表单控件，提供了很多网页的视觉交互组件、指令、服务、过滤器等。

>  开发环境 macOS 10.12.3  Chrome 56 nodejs 6.10.0


## 项目运行（nodejs 6.0+）
``` bash
# 查看Demo
https://fanny2018.github.io/angular-ui/dist/index.html

# 克隆到本地
git clone https://github.com/Fanny2018/angular-ui.git

# 进入文件夹
cd angular-ui

# 安装依赖
npm install

# 启动
npm start

# 发布环境
npm run build
```

## 项目约定

+ assets目录存放公共的图片和样式表
+ modules 公共模块目录
+ views存放页面文件夹  

你可以在src内扩展你需要的目录

## 代码风格
+ 项目采用了**tslint**作为代码检查工具
+ 请确保代码风格符合[codelyzer](https://angular.cn/docs/ts/latest/guide/style-guide.html)标准，否则启动和构建会不成功，如果不小心写出的代码不符合代码规范，请注意控制台输出错误的信息，并做出相应更改，直到没有代码语法错误

## 构建发布

1. 确认本地在开发过程中，没有代码错误，及编译警告
2. 在控制台输入`npm run build`
3. 等编译完成后，会在根目录下生成一个dist的目录，里面存有打包编译后的文件

## 直接运行打包后的代码
```bash
npm run production
```



