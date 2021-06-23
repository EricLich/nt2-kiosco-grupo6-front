import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carrito:[],
    apiUrl: 'http://localhost:4000',

  },
  mutations: {
    AGREGAR_AL_CARRITO: (state, {producto, cant}) => {
      const existeEnCarrito = state.carrito.find(item => item._id == producto._id);
      if(existeEnCarrito == undefined){
        cant = Number.parseInt(cant);
        state.carrito.push({...producto, cant});
      }else{
        cant = Number.parseInt(cant);
        existeEnCarrito.cant += cant;
      }
    },
    ELIMINAR_DE_CARRITO: (state, producto) => {
      let i = 0;
      let found = false;
      while(i < state.carrito.length && found == false){
        if(state.carrito[i] == producto){
          found = true;
        }else{
          i++;
        }
      }
      state.carrito.splice(i, 1 );
    },
    VACIAR_CARRITO: state => {
      state.carrito = [];
    },
    CAMBIAR_CANT_EN_CARRITO: (state, {producto, nuevaCant}) => {
      const existeEnCarrito = state.carrito.findIndex(item => item._id == producto._id);
      if(existeEnCarrito > -1){
        state.carrito[existeEnCarrito].cant += Number.parseInt(nuevaCant)      }
    }
  },
  actions: {
    agregarAlCarrito: ({commit}, {producto, cant}) => {
      commit('AGREGAR_AL_CARRITO', {producto, cant});
    },
    cambiarCantEnCarrito: ({commit}, {producto, nuevaCant}) => {
      commit('CAMBIAR_CANT_EN_CARRITO', {producto, nuevaCant});
    },
    eliminarDeCarrito: ({commit}, producto) => {
      commit('ELIMINAR_DE_CARRITO', producto)
    },
    vaciarCarrito: ({commit}) => {
      commit('VACIAR_CARRITO');
    }
  },
  modules: {
  },
  getters:{
    getApiUrl: state => state.apiUrl,
    getCarrito: state => state.carrito,
    getCantEnCarrito: state => state.carrito.length,
    getCats: state => state.categorias,
    getValorTotalCarrito: state => {
      let total = 0;
      state.carrito.forEach(item => {
        total += item.cant * item.precio
      })
      return total;
    }
  }
})
