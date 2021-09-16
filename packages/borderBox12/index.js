// 导入组件，组件必须声明 name
import BorderBox12 from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
BorderBox12.install = function (Vue) {
  Vue.component(BorderBox12.name, BorderBox12)
}

// 导出组件
export default BorderBox12