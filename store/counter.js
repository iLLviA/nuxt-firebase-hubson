export const state = () => ({
    counter: 0
})

export const mutations = {
    increments(state){
        state.counter++
    },
    decrements(state){
        state.counter--
    },
    tkgw(state, payload){
        state.counter += payload
    }
}

export const actions = {
    INCREMENT({ commit }){
        commit('increment')
    },
    DECREMENT({ commit }){
        commit('decrement')
    },
    TKGW({ commit }, payload){
        commit('tkgw',payload)
    }
}