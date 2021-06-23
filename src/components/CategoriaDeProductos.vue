<template>
    <div class="productosCategoria" v-if="prodsCat.productos.length > 0">
        <div class="data">
            <h2>{{ prodsCat.nomCat }}</h2>
            <span> {{ prodsCat.descCat }} </span>
        </div>
        <div class="prods">
            <Producto v-for="prod of prodsCat.productos" :key="prod._id" :producto="prod" @borrarDelFront="eliminarProd"/>
        </div>
    </div>
</template>

<script>

import Producto from './Producto.vue'

export default {
    components:{
        Producto
    },
    data(){
        return{
            
        }
    },
    props:{
        prodsCat: Object
    },
    methods: {
        eliminarProd(id){
        let i = 0;
        let found = false;
        while(i < this.prodsCat.productos.length && found == false){
          if(this.prodsCat.productos[i]._id == id){
            found = true;
          }else{
            i++;
          }
        }
        this.prodsCat.productos.splice(i, 1 );
        }
    }  
    
}
</script>

<style scoped>
    .prods{
    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 2fr));
    grid-gap: 30px;
    /* place-items: center center; */
    column-gap: 20px;
    row-gap: 25px;
    align-items: start;
    margin-top: 30px;
  }

  .data{
      display: flex;
      flex-direction: column;
      align-items:flex-start;
      justify-content: center;
  }

  .productosCategoria{
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      justify-content: space-between;
      width: 100%;
      margin-top: 50px;
        width:100%;
        background-color: rgb(250, 249, 250);
        border-radius: 15px;
        -webkit-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
        -moz-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
        box-shadow: 0px 6px 15px 6px rgba(100, 100, 100, 0.377);
        padding: 50px;
  }
</style>