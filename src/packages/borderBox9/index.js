// 导入组件，组件必须声明 name
import BorderBox9 from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
BorderBox9.install = function (Vue) {
  Vue.component(BorderBox9.name, BorderBox9)
}

// 导出组件
export default BorderBox9