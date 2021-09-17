// 导入组件，组件必须声明 name
import CapsuleChart from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
CapsuleChart.install = function (Vue) {
  Vue.component(CapsuleChart.name, CapsuleChart)
}

// 导出组件
export default CapsuleChart