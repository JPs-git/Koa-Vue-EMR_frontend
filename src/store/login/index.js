//引入api
import { reqTest, reqLogin } from '@/api'

const actions = {
  // 测试请求
  async Test({ commit }) {
    let result = await reqTest()
    console.log(result)
  },

  // 登录请求
  async login({ commit }, data) {
    let result = await reqLogin(data)
    console.log(result)

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
        reject(new Error('login faile'))
      }
    })
    
  },
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
