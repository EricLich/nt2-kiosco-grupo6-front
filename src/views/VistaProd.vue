<template>
  <div class="container producto">  
    <div class="todo">
     <img :src="require(`../../../server/src/assets/img/${this.producto.imgPath}`)" alt="imagen">
      <div class="precio-info-compra">
      <div class="info">
        <h2 class="prod-nombre">{{ producto.nomProd }}</h2>
        <h3 class="money">${{ producto.precio }}</h3>
        <span>{{ producto.desc }}</span>
      </div>
      <div class="extra">
        <p>Envio gratis a todo el país</p>
        <span>Conocé los tiempos y las formas de envío</span>
        <br>
        <p v-if="producto.stock > 0" class="hay">Hay stock</p>
        <p v-else>No hay stock de este producto</p>
        <p v-if="producto.stock < 20"> Solo quedan {{ producto.stock }} </p>
        <div class="selector-cant">
          <input
            type="number"
            :max="producto.stock"
            min="1"
            v-model="cant"
            class="cantidad"
          />
          <i
            class="fas fa-cart-plus agregarAlCarrito"
            @click="agregarAlCarrito()"
          ></i>
      </div>
      </div>

    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'


export default {
  props:['id'],
  name: 'VistaProd',
  components: {

  },
  data(){
    return{
      ...mapGetters(['getApiUrl']),
      producto:{},
      cant:0,
      token: {headers: {
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidHAiLCJpZCI6InRwIn0.4pHze58Eb6Sdr7u1lM0vguI4QhliGNkAgF27_Zc5p6k'
        }}
    } 
  },
  created(){
    axios.get(`${this.getApiUrl()}/productos/${this.id}`, this.token)
          .then(res => this.producto = res.data)
          .catch(err => console.log(err))
  },
  methods:{
      agregarAlCarrito(){
          this.$store.dispatch('agregarAlCarrito', {
              producto: this.producto,
              cant: this.cant
          })
          this.cant = 0;
      }
  },
  computed: {
    },
  mounted: {
  }
}
</script>

<style scoped>
  .producto{
    background-color: rgb(250, 249, 250);
    border-radius: 15px;
    -webkit-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
    -moz-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
    box-shadow: 0px 6px 15px 6px rgba(100, 100, 100, 0.6);
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    min-height: 70vh;
  }
  
  img{
    max-width: 35%;
    border-radius: 15px;
    box-shadow: 0px 6px 15px 6px rgb(214, 214, 214)
    
  }

  .todo{
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

  }

  .precio-info-compra{
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 20px;
  }
  
  .info{
    height: 40%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

  }

  .selector-cant{
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }

    .cantidad{
        width: 85%;
        padding: 9px 4px 9px 4px;
        border-radius: 5px;
        border: none;
        box-shadow: 0px 2px 5px 2px rgba(151, 151, 151, 0.287);
    }

    .agregarAlCarrito{
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        background: rgba(30, 238, 30, 0.753);
        color: rgb(241, 241, 241);
        border-radius: 5px;
        padding: 6px 6px;
        box-shadow: 0px 2px 5px 2px rgba(151, 151, 151, 0.287);
        transition: ease-in-out 0.1s;
        border: 1px solid rgba(30, 238, 30, 0.753);;
    }

    .agregarAlCarrito:hover{
        color: rgba(30, 238, 30, 0.753);
        background-color: #fff;
        border: 1px solid rgba(30, 238, 30, 0.753);
        transform: scale(1.01);
    }

    .prod-nombre{
      font-size: 42px;
    }

    .hay{
      font-weight: 100;
      color: rgb(119, 119, 119);
      margin-bottom: 5px;
    }

    .extra{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
    }

</style>