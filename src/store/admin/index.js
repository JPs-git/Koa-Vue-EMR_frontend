// 引入api
import { reqCreateUser, reqCheckWorkNum } from '@/api'

const actions = {
  // 注册新用户
  async createUser({ commit }, user) {
    let result = await reqCreateUser(user)
    return new Promise((resolve, reject) => {
        if(result.status === 200){
          resolve(result)
        }else{
          reject(result)
        }
    })
  },
  async checkWorkNum({commit}, workNumber){
    let result = await reqCheckWorkNum(workNumber)
    if(result.status === 200){
      // console.log(result)
      return result.data.isValid
    }
  }
}
const mutations = {}
const state = {}
const getters = {}
export default {
  actions,
  mutations,
  state,
  getters,
}
