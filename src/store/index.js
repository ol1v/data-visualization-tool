import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
    backgroundColors: []
}

const mutations = {
    SET_BACKGROUNDCOLOR(state, payload) {
        state.backgroundColors = payload
    }
}

const getters = {
    getBackgroundColors: (state) => {
        return state.backgroundColors
    }
}