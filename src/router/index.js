// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'
//使用插件
Vue.use(VueRouter)
// 引入路由组件
import Home from '@/views/Home'
import Admin from '@/views/Admin'
import Login from '@/views/Login'
// 备份原本的push、replace方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
// 重写push、replace方法 以解决重复点击报错
// 通过重写两个方法，为其添加resolve和reject函数解决
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
// 新建并暴露路由器
export default new VueRouter({
  // 配置路由
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path:'/login',
      component: Login
    },
    {
      path: '/admin',
      component: Admin,
    },
    // 重定向
    {
      path: '*',
      redirect: '/home',
    },
  ],
})
