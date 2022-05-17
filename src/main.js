import Vue from 'vue'
import App from './App.vue'
// 清除默认样式
import '@/assets/style/css/reset.css'
// 引入路由
import router from '@/router'
// 引入vuex
import store from './store'
// 引入Element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 引入并注册全局组件

Vue.config.productionTip = false

new Vue({
  beforeCreate(){
    // 安装全局事件总线
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  // 注册路由（key value一致 简写）
  router,
  // 注册vuex仓库, 组件身上会增加一个$Store
  store
}).$mount('#app')
