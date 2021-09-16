// 导入组件，组件必须声明 name
import ScrollRankingBoard from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
ScrollRankingBoard.install = function (Vue) {
  Vue.component(ScrollRankingBoard.name, ScrollRankingBoard)
}

// 导出组件
export default ScrollRankingBoard