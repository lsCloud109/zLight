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
import fullScreenContainer from './fullScreenContainer'

// decoration
import decoration1 from './decoration1'
import decoration2 from './decoration2'
import decoration3 from './decoration3'
import decoration4 from './decoration4'
import decoration5 from './decoration5'
import decoration6 from './decoration6'
import decoration7 from './decoration7'
import decoration8 from './decoration8'
import decoration9 from './decoration9'
import decoration10 from './decoration10'
import decoration11 from './decoration11'
import decoration12 from './decoration12'

// 组件列表
const components = [
  loading,
  fullScreenContainer,
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
  decoration1,
  decoration2,
  decoration3,
  decoration4,
  decoration5,
  decoration6,
  decoration7,
  decoration8,
  decoration9,
  decoration10,
  decoration11,
  decoration12,
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