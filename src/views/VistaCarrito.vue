<template>
  <div class="container prods-carrito">
    <h2 class="titulo-carrito">Carrito</h2>
    <ItemCarrito v-for="producto in productos" :key="producto._id" :producto="producto" />
    <div class="totales">
      <h2 v-if="this.getValorTotalCarrito > 0" class="total money" >Total: ${{ this.getValorTotalCarrito }} </h2>        
      <h2 v-else>Cuando agregues productos se verán en esta página</h2>
    </div>
  </div>
</template>

<script>
import ItemCarrito from '../components/ItemCarrito.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'VistaCarrito',
  components:{
      ItemCarrito
  },
  data(){
      return{
          productos: []

      }
  },
  computed:{
      ...mapGetters(['getCarrito', 'getValorTotalCarrito']),
  },
  mounted(){  
    this.productos = this.getCarrito; 
  }
}
</script>

<style scoped>

  .prods-carrito{
    margin-top: 20px;
    width: 90%;
    height: 100%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(250, 249, 250);
    border-radius: 15px;
    -webkit-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
    -moz-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
    box-shadow: 0px 6px 15px 6px rgba(100, 100, 100, 0.6);
  }

  .totales{
    align-self: flex-end;
  }

  .titulo-carrito{
    align-self: flex-start;
    margin-bottom: 10px;
    font-size: 32px;
  }

</style>