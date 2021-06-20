<template>
  <div class="container producto">  
     <img :src="require(`../../../server/src/assets/img/${this.producto.imgPath}`)" alt="">
      <div class="precio-info-compra">
      <div class="info">
        <h2>{{ producto.nomProd }}</h2>
        <h3>${{ producto.precio }}</h3>
        <span>{{ producto.desc }}</span>
      </div>
      <p>Envio gratis a todo el país</p>
      <span>Conocé los tiempos y las formas de envío</span>
      <br>
      <p v-if="producto.stock > 0">Hay stock</p>
      <p v-else>No hay stock de este producto</p>
      <p v-if="producto.stock > 0"> Stock: {{ producto.stock }} </p>
      <button @click="agregarAlCarrito()">Agregar al Carrito</button>
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
      cant:10
    } 
  },
  created(){
    axios.get(`${this.getApiUrl()}/productos/${this.id}`)
          .then(res => this.producto = res.data)
          .catch(err => console.log(err))
  },
  methods:{
      agregarAlCarrito(){
          this.$store.dispatch('agregarAlCarrito', {
              producto: this.producto,
              cant: this.cant
          })
      }
  },
  computed: {
    },
  mounted: {
  }
}
</script>

<style>
  .producto{
    background-color: rgb(250, 249, 250);
    border-radius: 15px;
    -webkit-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
    -moz-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
    box-shadow: 0px 6px 15px 6px rgba(100, 100, 100, 0.6);
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 100%;
  }
  
  img{
    width: 50%;
    
  }

  .precio-info-compra{
    height: 100%;
    padding: 10px;
    /*width: 50%;*/
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
  }
</style>