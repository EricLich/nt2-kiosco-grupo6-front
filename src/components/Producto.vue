<template>
    <div class="producto" :key="producto.id">
        <img :src="require(`../../../server/src/assets/img/${this.producto.imgPath}`)"  alt="producto"/> 
        <div class="data">
            <h3 class="precio">$ {{ producto.precio }}</h3>
            <router-link class="link" :to="{ name: 'pag-producto', params: { id: producto._id }}">
                <h4 class="nomProd">{{ producto.nomProd }}</h4>
            </router-link>
            <span class="desc">{{ producto.desc }}</span>
            <p v-if="producto.stock < 10">Ultimos {{ producto.stock }} en stock!</p>
            <input type="number" :max="producto.stock" v-model="cant">
            <div class="botonera">
                <button class="agregarAlCarrito" @click="agregarAlCarrito()" >+</button>
                <router-link :to="{ name: 'pag-editar-prod', params: { id: producto._id }}" class="editar"><i class="fa fa-pencil" aria-hidden="true"></i></router-link>
                <button class="eliminar" @click="eliminarProducto()"><i class="fa fa-trash eliminar" ></i></button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'Producto',
  data(){
      return{
          cant: 0
      }
  },
  components: {
    
  }, 
  props: {
      producto: Object
  },
  methods:{
      agregarAlCarrito(){
          if(this.cant > 0){
              this.$store.dispatch('agregarAlCarrito', {
                  producto: this.producto,
                  cant: this.cant
              })
              this.cant = 0;
          }else{
              alert("Tenes que seleccionar al menos un producto")
          }
      },
      eliminarProducto(){
          axios.delete(`${this.getApiUrl}/productos/${this.producto._id}`).then(res => console.log(res)).catch(err => console.log(err)) 
          this.$emit('borrarDelFront', this.producto._id);
      }
  },
  computed:{
      img(){
          return this.producto.imgPath
      },
      ...mapGetters(['getApiUrl', 'getcantEnCarrito'])
  }
}
</script>

<style scoped>

    .producto{
        padding: 0 !important;
        height: 350px;
        width: 240px;
        background-color: #fff;
        border-radius: 15px;
        -webkit-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
        -moz-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
        box-shadow: 0px 6px 15px 6px rgba(151, 151, 151, 0.6);
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        margin-right: 40px;
        transition: ease-in-out 0.1s;
    }

    .producto:hover{
        transform: scale(1.02);
    }
    img{
        width: 100%;
        height: 75%;
        border-radius: 15px 15px 0 0;
    }

    .data{
        height: 100%;
        text-align: left;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .precio{
        color: rgb(107, 175, 43);
    }

    .nomProd{
        margin-top: 2px;
        font-size: 20px;
    }

    .data button{
        color: white;
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 5px;
        padding: 0;
        margin: 0;
    }

    .desc{
        margin: 2px 0 3px 0;
        font-size: 12px;
        color: rgb(170, 170, 170);
        font-weight: bold;
    }

    .agregarAlCarrito{
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        transition: ease-in-out 0.1s;
        background: rgba(30, 238, 30, 0.753);
    }

    .agregarAlCarrito:hover{
        color: rgba(30, 238, 30, 0.753);
        background-color: #fff;
        border: 1px solid rgba(30, 238, 30, 0.753);
        transform: scale(1.01);
        box-shadow: 0px 2px 7px 2px rgba(151, 151, 151, 0.794);

    }

    .editar{
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        transition: ease-in-out 0.1s;
        background: yellow;
        color: white;
        border-radius: 5px;
        padding: 2px 6px 2px 6px;
        margin-right: 5px;
    }

    .eliminar{
        background-color: rgb(255, 0, 0);
        cursor: pointer;
    }

    .botonera{
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0;
    }

    .botonera button{
        margin-right: 5px;
    }


</style>