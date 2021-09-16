## zlight是干什么的?

*zlight是一个基于**Vue**的数据可视化组件库
* 提供用于提升页面视觉效果的**SVG**边框和装饰
* 轮播表等其他组件

### npm安装

```shell
$ npm install zlight -S
```

### 使用

```js
import Vue from 'vue'
import Zlight from 'zlight'

Vue.use(Zlight)

// 按需引入
import { borderBox1 } from 'zlight'
Vue.use(borderBox1)
```