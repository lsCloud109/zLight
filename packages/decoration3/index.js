// 导入组件，组件必须声明 name
import Decoration3 from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
Decoration3.install = function (Vue) {
  Vue.component(Decoration3.name, Decoration3)
}

// 导出组件
export default Decoration3