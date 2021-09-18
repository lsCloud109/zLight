// 导入组件，组件必须声明 name
import Decoration9 from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
Decoration9.install = function (Vue) {
  Vue.component(Decoration9.name, Decoration9)
}

// 导出组件
export default Decoration9