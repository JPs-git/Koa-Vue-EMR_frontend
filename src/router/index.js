// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'
import { reqAdminCurrent, reqUserInfo } from '../api/index'

//使用插件
Vue.use(VueRouter)
// 引入路由组件
import Home from '@/views/Home'
import Admin from '@/views/Admin'
import Login from '@/views/Login'
import Patient from '@/views/Patient'
import NewPatient from '@/views/NewPatient'
import User from '@/views/Admin/User'
import NewUser from '@/views/Admin/NewUser'
import NewuUserOk from '@/views/Admin/NewUserOk'
import ModifyUser from '@/views/Admin/ModifyUser'
import newPatientOk from '@/views/NewPatientOk'
import PatientDetail from '@/views/PatientDetail'
import ModifyPatient from '@/views/ModifyPatient'
import showAdmins from '@/views/Admin/Admin'
import NewAdmin from '@/views/Admin/NewAdmin'
import UserInfo from '@/views/UserInfo'

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
const router = new VueRouter({
  // 配置路由
  routes: [
    {
      path: '/home',
      component: Home,
      meta: { autho: 'login', title: '首页' },
    },
    {
      path: '/login',
      component: Login,
      meta: { title: '登录' },
    },
    {
      path: '/admin',
      component: Admin,
      meta: { autho: 'admin', title: '管理员首页' },
      children: [
        {
          path: 'user',
          component: User,
          meta: { autho: 'admin', title: '用户管理' },
        },
        {
          path: 'newuser',
          component: NewUser,
          meta: { autho: 'admin', title: '添加新用户' },
        },
        {
          path: 'newuserok',
          component: NewuUserOk,
          meta: { autho: 'admin', title: '成功！' },
        },
        {
          path: 'modify',
          name: 'modify',
          component: ModifyUser,
          meta: { autho: 'admin', title: '修改用户信息' },
        },
        {
          path: 'admin',
          component: showAdmins,
          meta: { autho: 'admin', title: '管理员管理' },
        },
        {
          path: 'newadmin',
          component: NewAdmin,
          meta: { autho: 'admin', title: '添加新管理员' },
        },
      ],
    },
    {
      path: '/patient',
      component: Patient,
      meta: { autho: 'login', title: '病历管理' },
    },
    {
      path: '/newpatient',
      component: NewPatient,
      meta: { autho: 'doctor', title: '新增病历' },
    },
    {
      path: '/newpatientok',
      component: newPatientOk,
      meta: { autho: 'doctor', title: '成功！' },
    },
    {
      path: '/patientdetail',
      component: PatientDetail,
      meta: { autho: 'login', title: '病历详情' },
    },
    {
      path: '/modifypatient',
      name: 'modifypatient',
      component: ModifyPatient,
      meta: { autho: 'doctor', title: '修改病历' },
    },
    {
      path: '/userinfo',
      component: UserInfo,
      meta: { autho: 'login', title: '用户信息' },
    },
    // 重定向
    {
      path: '*',
      redirect: '/home',
    },
  ],
})
router.beforeEach(async (to, from, next) => {
  window.document.title = to.meta.title == undefined ? '欢迎' : to.meta.title
  if (to.meta.autho) {
    // 需要鉴权
    let result = await reqUserInfo()
    if (to.meta.autho === 'login') {
      if (result.status === 200 && result.data.permission) {
        next()
      } else {
        next('/login')
      }
    } else if (to.meta.autho === 'doctor') {
      const permission = result.data.permission
      if (permission === 'doctor') {
        next()
      } else {
        next(from)
      }
    } else if (to.meta.autho === 'admin') {
      const result = await reqAdminCurrent()
      if (result.status === 200) {
        next()
      } else {
        next('/login')
      }
    }
    next()
  }
  // 不需要鉴权
  next()
})

export default router
