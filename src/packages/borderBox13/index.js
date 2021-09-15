// 导入组件，组件必须声明 name
import BorderBox13 from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
BorderBox13.install = function (Vue) {
  Vue.component(BorderBox13.name, BorderBox13)
}

// 导出组件
export default BorderBox13