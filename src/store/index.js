import Vue from 'vue'
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)
// 引入子模块
import login from './login'
import admin from './admin'
import user from './user'

// 对外暴露Store实例
export default new Vuex.Store({
  // 模块化
  modules: { login, admin, user },
})
