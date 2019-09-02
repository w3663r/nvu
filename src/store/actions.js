import api from './api'

const actions = {
  getMesseges (context) {
    return api.get('http://127.0.0.1:8000/messege/')
      .then((response) => context.commit('getMesseges', response))
  }
}

export default actions
