//引入api
import { reqNewPatient ,reqFindPatient} from '@/api'

const actions = {
  // 新增病人
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
  // 查询病人
  async findPatient({commit}, query){
    const result = await reqFindPatient(query)
    if(result.status === 200){
      commit('FINDPATIENT',result.data)
    }
  }
}

const mutations = {
  FINDPATIENT(state, data){
    state.Patients = data.findResult
    state.total = data.total
  }
}
const state = {
  Patients:[],
  total:0
}
const getters = {}
export default {
  actions,
  mutations,
  state,
  getters,
}
