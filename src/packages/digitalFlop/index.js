// 导入组件，组件必须声明 name
import DigitalFlop from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
DigitalFlop.install = function (Vue) {
  Vue.component(DigitalFlop.name, DigitalFlop)
}

// 导出组件
export default DigitalFlop