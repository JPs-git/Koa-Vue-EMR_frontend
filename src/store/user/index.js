import { reqUserInfo } from '@/api'

const actions = {
  // 获取当前用户信息
  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    return new Promise((resolve, reject) => {
      if (result.status === 200) {
        commit('GETUSERINFO', result.data)
        resolve(result)
      } else {
        reject(result)
      }
    })
  },
}

const mutations = {
  // 存储用户信息
  GETUSERINFO(state, data){
    
    state.userInfo = data

  }
}
const state = {
  userInfo:{}
}
const getters = {}
export default {
  actions,
  mutations,
  state,
  getters,
}
