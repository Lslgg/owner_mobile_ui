import Vue from 'vue';

const state: any = {
  brandList: [],
  currentCarList: []
};

const mutations: any = {
  // 设置隐藏显示日期框
  setBrands(state: any, list: []) {
    Vue.set(state, 'brandList', list)
  },

  setCurrentCarList(state: any, list: []) {
    Vue.set(state, 'currentCarList', list)
  }
};

const actions: any = {
  setBrands({ commit }, list: []) {
    commit('setBrands', list)
  },
  setCurrentCarList({ commit }, list: []) {
    commit('setCurrentCarList', list)
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};



// const state = {
//   // 是否专业版
//   isPro: 0,
//   // 客户id
//   clientId: 0
// }

// const mutations = {
//   setClientId(state: any, clientId: number) {
//     state.clientId = clientId
//   }
// }

// const actions = {
//   setClientId({ commit }: any, clientId: number) {
//     commit('setClientId', clientId)
//   }
// }

// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions
// }
