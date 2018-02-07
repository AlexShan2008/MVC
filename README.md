# MVC with TypeScript

## 一、项目构建步骤
```
确保已经全局安装了npm 和 tsd / types工具 

npm install @types/jquery --save-dev
```
1. npm install animate.css bootstrap datatables handlebars jquery q -S
2. npm install browser-sync browserify chai gulp gulp-coveralls gulp-tslint gulp-typescript gulp-uglify karma karma-chai karma-mocha karma-sinon mocha run-sequence sinon vinyl-buffer vinyl-source-stream --save-dev
3. tsd init
4. tsd install jquery bootstrap handlebars q chai sinon mocha jquery.dataTables highcharts --save

## 二、构建项目目录
``` 
```
## 三、MVC框架内容
``` 
1. 程序组件：根组件，初始化框架内所有的内部组件（中介器、路由和调度器）
2. 中介器：负责程序中所有其他模块间的通信
3. 程序事件： 将信息从一个组件发送到另一个，订阅和取消程序事件
4. 路由：观察浏览器的URL的变更，变更时创建一个Route类的实例，通过程序事件传递给调度器
5. 路由表： 用来表示一个URL。URL的命名规则可以指明那个一个controller的方法在特定路由下被调用
6. controller： 初始化view和model，初始化完成，controller就将执行流交给一个或多个model
7. model：model负责与HTTP API 通信，并在内存中维护这些数据，涉及数据的格式化和对数据的增减。一旦model完成了对数据的操作，它就将被传递到一个或者多个view中
8. view： 负责加载并编译模板，一旦模板编译完成，它就会等待model传入数据。当收到数据后，它会和模板一起被编译成HTML代码并插入DOM。view也负责绑定和解绑UI事件（click、focus等）
```
