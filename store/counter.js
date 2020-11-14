export const state = () => ({
  count: 0
})

export const mutations = {
  increment(state) {
    console.log('あああ');
    state.count++
  },
  decrement(state) {
    state.count--
  },
  incrementByNum(state, payload) {
    state.count += Number(payload)
  }
}

export const actions = {
  INCREMENT({commit}) {
    commit('increment');
  },
  DECREMENT({commit}) {
    commit('decrement');
  },
  INCREMENT_BY_NUM({commit}, payload) {
    commit('incrementByNum', payload);
  }
}
