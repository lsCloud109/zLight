// 导入组件，组件必须声明 name
import Decoration6 from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
Decoration6.install = function (Vue) {
  Vue.component(Decoration6.name, Decoration6)
}

// 导出组件
export default Decoration6