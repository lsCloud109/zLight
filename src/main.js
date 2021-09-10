import Vue from 'vue'
import App from './App.vue'

// // 导入组件库
// import zLight from './packages'
// // 注册组件库
// Vue.use(zLight)
import zlLoading from './packages/loading/index'
Vue.use(zlLoading)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
