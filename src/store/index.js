import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categorias:[],
    carrito:[],
    apiUrl: 'http://localhost:4000'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
    getApiUrl: state => state.apiUrl,
    getCarrito: state => state.carrito,
    getCats: state => state.categorias
  }
})
