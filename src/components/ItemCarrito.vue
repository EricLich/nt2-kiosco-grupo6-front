<template>
  <div class="item-carrito" v-if="producto.cant > 0">
    <div class="img-titulo">
      <img :src="require(`../../../server/src/assets/img/${this.producto.imgPath}`)" alt="">
      <router-link class="link" :to="{ name: 'pag-producto', params: { id: producto._id }}">
        <h2> {{ producto.nomProd }} </h2>
      </router-link>
    </div>
    <div class="cant-precio-botones">
      <span class="cant">
        <p>Cant: {{ producto.cant }}</p> 
        <input type="number" :min="-producto.cant" :max="producto.stock - producto.cant" v-model="nuevaCant">
        <i v-if="nuevaCant + producto.cant > 0"
          class="fas fa-cart-plus agregarAlCarrito"
          @click="cambiarCant()"
        ></i>
        <i v-else-if="nuevaCant < 0"
          class="fa fa-trash eliminarDelCarrito"
          @click="cambiarCant()"
        ></i>
        </span>
      
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
      nuevaCant: 0,
    }
  },
  props: {
    producto: Object
  },
  methods:{
    eliminarDeCarrito(){
      this.$store.dispatch('eliminarDeCarrito', this.producto)
    },
    cambiarCant(){
      if(this.producto.cant == 0){
        console.log('hols')
      }else{
        this.$store.dispatch('cambiarCantEnCarrito', {producto: this.producto, nuevaCant: this.nuevaCant});
        this.nuevaCant = 0;
        console.log(this.producto.cant)
        if(this.producto.cant == 0){
          this.eliminarDeCarrito();
        }
      }
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
    transition: ease-in-out 0.25s;
    overflow: hidden;
  }

  .item-carrito:hover{
    transform: scale(1.015);

    opacity: 1;
  }

  .img-titulo{
    width: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .img-titulo img{
    min-width: 50px;
    max-width: 25%;
    margin-right: 7px;
    overflow: hidden;
  }

  .cant-precio-botones{
    
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
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

  .cant{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .cant p{
    margin-right: 7px;
  }

  input[type="number"]{
    margin: 0 5px;
    width: 60px;
    padding: 9px 4px 9px 4px;
    border-radius: 8px;
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

  .eliminarDelCarrito{
    cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        background: red;
        color: rgb(241, 241, 241);
        border-radius: 5px;
        padding: 6px 8px;
        box-shadow: 0px 2px 5px 2px rgba(151, 151, 151, 0.287);
        transition: ease-in-out 0.1s;
        border: 1px solid red;
  }

  .eliminarDelCarrito:hover{
        background-color: #fff;
        color: red;
        border-color: red;
    }
</style>