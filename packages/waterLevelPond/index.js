// 导入组件，组件必须声明 name
import WaterLevelPond from './src/main.vue'

// 为组件提供 install 安装方法，供按需引入
WaterLevelPond.install = function (Vue) {
  Vue.component(WaterLevelPond.name, WaterLevelPond)
}

// 导出组件
export default WaterLevelPond