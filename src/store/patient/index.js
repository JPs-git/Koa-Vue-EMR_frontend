//引入api
import { reqNewPatient } from '@/api'

const actions = {
  async newPatient({ commit }, newPatient) {
    const result = await reqNewPatient(newPatient)
    return new Promise((resolve, reject) => {
      if (result.status === 200) {
        resolve()
      } else {
        reject(result)
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
