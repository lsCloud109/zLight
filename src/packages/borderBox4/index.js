// 导入组件，组件必须声明 name
import BorderBox4 from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
BorderBox4.install = function (Vue) {
  Vue.component(BorderBox4.name, BorderBox4)
}

// 导出组件
export default BorderBox4