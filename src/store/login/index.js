//引入api
import { reqTest } from '@/api'

const actions = {
  // 测试请求
  async Test({ commit }) {
    let result = await reqTest()
    console.log(result)
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
