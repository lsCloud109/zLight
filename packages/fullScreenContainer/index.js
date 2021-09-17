// 导入组件，组件必须声明 name
import FullScreenContainer from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
FullScreenContainer.install = function (Vue) {
  Vue.component(FullScreenContainer.name, FullScreenContainer)
}

// 导出组件
export default FullScreenContainer