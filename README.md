# MVC
  - model（数据层）
  - view（视图层）
  - controller（控制器）

![mvc](https://firebirdsql.org/file/documentation/reference_manuals/fbdevgd-en/html/images/fbdevgd30_mvc_001_en.png)
model 和 view 相互没有直接联系；

当用户通过操作view提供的接口时，由controller通过接口向model发起数据变动请求；当model改变数据之后，再通过controller向view展示新数据

# Q
 - MVC是什么？
 - MVVM是什么？
 - React和Vue分别是什么？

# 运行
```
yarn start
```