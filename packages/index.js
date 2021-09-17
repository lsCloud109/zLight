// 导入button组件
import loading from './loading'
import borderBox1 from './borderBox1'
import borderBox2 from './borderBox2'
import borderBox3 from './borderBox3'
import borderBox4 from './borderBox4'
import borderBox5 from './borderBox5'
import borderBox6 from './borderBox6'
import borderBox7 from './borderBox7'
import borderBox8 from './borderBox8'
import borderBox9 from './borderBox9'
import borderBox10 from './borderBox10'
import borderBox11 from './borderBox11'
import borderBox12 from './borderBox12'
import borderBox13 from './borderBox13'
import charts from './charts'
import activeRingChart from './activeRingChart'
import capsuleChart from './capsuleChart'
import waterLevelPond from './waterLevelPond'
import percentPond from './percentPond'
import conicalColumnChart from './conicalColumnChart'
import digitalFlop from './digitalFlop'
import scrollBoard from './scrollBoard'
import scrollRankingBoard from './scrollRankingBoard'

// 组件列表
const components = [
  loading,
  borderBox1,
  borderBox2,
  borderBox3,
  borderBox4,
  borderBox5,
  borderBox6,
  borderBox7,
  borderBox8,
  borderBox9,
  borderBox10,
  borderBox11,
  borderBox12,
  borderBox13,
  charts,
  activeRingChart,
  capsuleChart,
  waterLevelPond,
  percentPond,
  conicalColumnChart,
  digitalFlop,
  scrollBoard,
  scrollRankingBoard
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  loading,
  borderBox1,
  borderBox2,
  borderBox3,
  borderBox4,
  borderBox5,
  borderBox6,
  borderBox7,
  borderBox8,
  borderBox9,
  borderBox10,
  borderBox11,
  borderBox12,
  borderBox13,
  charts,
  activeRingChart,
  capsuleChart,
  waterLevelPond,
  percentPond,
  conicalColumnChart,
  digitalFlop,
  scrollBoard,
  scrollRankingBoard
}