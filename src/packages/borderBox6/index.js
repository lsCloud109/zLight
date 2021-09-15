// 导入组件，组件必须声明 name
import BorderBox6 from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
BorderBox6.install = function (Vue) {
  Vue.component(BorderBox6.name, BorderBox6)
}

// 导出组件
export default BorderBox6