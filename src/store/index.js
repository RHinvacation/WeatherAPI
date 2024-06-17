import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 1
  },
  getters: {
  },
  mutations: {
    countPlus(state){
      // 变更状态
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
