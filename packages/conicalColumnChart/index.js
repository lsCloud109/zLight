// 导入组件，组件必须声明 name
import ConicalColumnChart from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
ConicalColumnChart.install = function (Vue) {
  Vue.component(ConicalColumnChart.name, ConicalColumnChart)
}

// 导出组件
export default ConicalColumnChart