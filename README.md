# BingYan-internship-2022spring-XuQiao
 
## 页面查看方法

在node.js环境下运行`nodejs`文件夹下的`ChildPageRefresh.js`文件，浏览器输入 http://localhost:3000/ 访问页面。

## 可点击的按钮
- 首页下顶部tab的【关注】和【热榜】，以及【热榜】下的二级tab【前端】和【后端】，使用的fetch后台数据stream，局部更新页面。

- 底部tab下的【首页】和【沸点】，直接使用`<a href="...">`来向后台拿数据，更新整个页面。

## 文件结构
```
BingYan-internship-2022spring-XuQiao
|
|
+---css
|    |
|    |
|    +--feiDian.css：“沸点”板块css文件
|    |
|    |
|    +--index.css：主页板块css文件
|    |
|    |
|    +--myHome.css：“我的”板块css文件
|
|
+---images：图片素材库
|
|
+---js
|    |
|    |
|    +--feiDian.js：“沸点”板块js文件
|    |
|    |
|    +--index.js：主页板块js文件
|    |
|    |
|    +--myHome.js：“我的”板块js文件
|
|
+---node_modules:奇怪的多出来的东西？因为后台文件
|                已经放进另一个子文件夹了不知为何在主目录会有这个。
|
|
+---nodejs 存放后台文件
|    |
|    |
|    +--ChildPageRefresh.js:后台主程序
|    |
|    |
|    +--......
|
+---pages 存放前台文件
|    |
|    |
|    +--......
|
|
index.html：最初的主页面
|
|
draft.html ：草稿，可无视
|
|
keyPoint ：一些实现的关键点
|
|
READNE.md
|
|
......
```


