import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        backgroundColors: []
    },
    getters: {
        getBackgroundColors: (state) => {
            return state.backgroundColors
        }
    },
    mutations: {
        SET_BACKGROUNDCOLOR(state, payload) {
            state.backgroundColors = payload
        }
    },
    })
