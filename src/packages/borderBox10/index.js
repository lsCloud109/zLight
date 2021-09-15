// 导入组件，组件必须声明 name
import BorderBox10 from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
BorderBox10.install = function (Vue) {
  Vue.component(BorderBox10.name, BorderBox10)
}

// 导出组件
export default BorderBox10