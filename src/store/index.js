import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messages: []
  },
  mutations: {
    setMessages (state, messages) {
      state.messages = messages
    }
  },
  actions: {
    getMessages (context) {
      fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            context.commit('setMessages', data.bpi.EUR.rate)
          }
        })
    }
  }
})
