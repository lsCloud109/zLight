// 导入组件，组件必须声明 name
import Decoration12 from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
Decoration12.install = function (Vue) {
  Vue.component(Decoration12.name, Decoration12)
}

// 导出组件
export default Decoration12