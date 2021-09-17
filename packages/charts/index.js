// 导入组件，组件必须声明 name
import Charts from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
Charts.install = function (Vue) {
  Vue.component(Charts.name, Charts)
}

// 导出组件
export default Charts