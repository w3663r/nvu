import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

// import actions from '@/store/actions'

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
      fetch('http://127.0.0.1:8000/connection')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          context.commit('setMessages', data[1])
        })
    }
  }
})
