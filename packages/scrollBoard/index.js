// 导入组件，组件必须声明 name
import ScrollBoard from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
ScrollBoard.install = function (Vue) {
  Vue.component(ScrollBoard.name, ScrollBoard)
}

// 导出组件
export default ScrollBoard