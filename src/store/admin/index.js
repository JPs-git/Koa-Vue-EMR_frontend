// 引入api
import {
  reqCreateUser,
  reqCheckWorkNum,
  reqAllUsers,
  reqModifyUser,
} from '@/api'

const actions = {
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
  async allUsers({ commit }) {
    let result = await reqAllUsers()
    if (result.status === 200) {
      commit('ALLUSERS', result.data.findResult)
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
    state.userInfo = data
  },
}
const state = {
  userInfo: [],
}
const getters = {}
export default {
  actions,
  mutations,
  state,
  getters,
}
