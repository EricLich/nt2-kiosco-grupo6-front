<template>
  <div class="item-carrito">
    <div class="img-titulo">
      <img :src="require(`../../../nt2-kiosco-grupo6-back/src/assets/img/${this.producto.imgPath}`)" alt="">
      <router-link class="link" :to="{ name: 'pag-producto', params: { id: producto._id }}">
        <h2> {{ producto.nomProd }} </h2>
      </router-link>
    </div>
    <div class="cant-precio-botones">
      <span>Cant: <strong>{{ producto.cant }}</strong></span>
      <p>p/unit: <strong>${{ producto.precio }}</strong></p>
      <p class="money">Total: <strong>${{ total }}</strong></p>
      <button @click="eliminarDeCarrito()" >
        <i class="fa fa-trash eliminar" ></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  props: {
    producto: Object
  },
  methods:{
    eliminarDeCarrito(){
      this.$store.dispatch('eliminarDeCarrito', this.producto)
    }
  },
  computed:{
    total(){
      return this.producto.precio * this.producto.cant;
    }
  }
}
</script>

<style scoped>
  .item-carrito{
    opacity: 0.80;
    margin-bottom: 20px;
    width: 100%;
    height: 75px;
    background-color: rgb(250, 250, 250);
    border-radius: 15px;
    -webkit-box-shadow: 0px 6px 15px 6px rgba(82, 82, 82, 0.068);
    -moz-box-shadow: 0px 6px 15px 6px rgba(82, 82, 82, 0.103);
    box-shadow: 0px 6px 15px 6px rgba(100, 100, 100, 0.397);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    transition: ease-in-out 0.1s;
  }

  .item-carrito:hover{
    transform: scale(1.02);

    opacity: 1;
  }

  .img-titulo{
    width: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .img-titulo img{
    min-width: 50px;
    max-width: 25%;
    margin-right: 7px;
    
  }

  .cant-precio-botones{
    
    width: 25%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    
  }

  .cant-precio-botones button{
    margin-left: 10px;
  }

  .cant-precio-botones p{
    margin-left: 10px;
  }

  .eliminar{
    text-decoration: none;
    border: 0px;
    color: white;
    font-size: 20px;
    padding: 5px;
    background-color: red;
  }

  .eliminar:hover{
    transform: scale(1) !important;
    box-shadow: none;
    cursor: pointer;
  }

  .link{
    color: black;
  }

</style>