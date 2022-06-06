// 引入api
import {
  reqAdminRegister,
  reqAdminLogin,
  reqAdminFind,
  reqCreateUser,
  reqCheckWorkNum,
  reqAllUsers,
  reqModifyUser,
  reqAdminCheckWorkNum,
  reqAdminRemove,
  reqAdminCurrent,
} from '@/api'

const actions = {
  // 注册管理员
  async adminRegister({commit}, admin){
    const result = await reqAdminRegister(admin)
    return new Promise((resolve, reject) => {
      if (result.status === 200) {
        resolve(result)
      } else {
        reject(result)
      }
    })
  },
    // 检查工号是否已注册
    async adminCheckWorkNum({ commit }, workNumber) {
      let result = await reqAdminCheckWorkNum(workNumber)
      if (result.status === 200) {
        // console.log(result)
        return result.data.isValid
      }
    },
  // 管理员登录
  async adminLogin({commit}, admin){
    const result = await reqAdminLogin(admin)
    return new Promise((resolve, reject) => {
      if (result.status === 200) {
        if (result.data.success) {
          // 登录成功  存储token
          resolve(result.data.token)
        }else{
          // 密码错误
          reject(result.data.msg)
        }
      }else{
        reject(new Error('login error'))
      }
    })
  },
  // 查询所有管理员
  async adminFind({commit}, query){
    let result = await reqAdminFind(query)
    if (result.status === 200) {
      commit('ADMINFIND', result.data)
    }
  },
  // 停用管理员
  async adminRemove({commit}, workNumber){
    let result = await reqAdminRemove(workNumber)
    return new Promise((resolve, reject) => {
      if (result.status === 200) {
        resolve(result)
      } else {
        reject(result)
      }
    })
  },
  // 获取当前管理员信息
  async adminCurrent({commit}){
    let result = await reqAdminCurrent()
    return new Promise((resolve, reject) => {
      if (result.status === 200) {
        commit('ADMINCURRENT', result.data)
        resolve(result)
      } else {
        reject(result)
      }
    })
  },
  // 注册新用户
  async createUser({ commit }, user) {
    let result = await reqCreateUser(user)
    return new Promise((resolve, reject) => {
      if (result.status === 200) {
        resolve(result)
      } else {
        reject(result)
      }
    })
  },
  // 检查工号是否已注册
  async checkWorkNum({ commit }, workNumber) {
    let result = await reqCheckWorkNum(workNumber)
    if (result.status === 200) {
      // console.log(result)
      return result.data.isValid
    }
  },

  // 查询所有用户
  async allUsers({ commit }, query) {
    let result = await reqAllUsers(query)
    if (result.status === 200) {
      commit('ALLUSERS', result.data)
    }
  },

  // 修改用户信息
  async modifyUser({commit}, modifiedUser){
    let result = await reqModifyUser(modifiedUser)
    return new Promise((resolve, reject) => {
      if (result.status == 200){
        resolve(result)
      }else{
        reject(result)
      }
    })
   
  }
}
const mutations = {
  ALLUSERS(state, data) {
    state.userInfo = data.findResult
    state.userTotal = data.total
  },
  ADMINFIND(state, data){
    state.admins = data.findResult,
    state.adminTotal = data.total
  },
  ADMINCURRENT(state, data){
    state.adminInfo = data
  }
}
const state = {
  userInfo: [],
  userTotal:0,
  admins:[],
  adminTotal:0,
  adminInfo:{}
}
const getters = {}
export default {
  actions,
  mutations,
  state,
  getters,
}
