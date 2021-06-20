<template>
  <div class="container">
    <div class="productos">
      <h2>Activar Productos inactivos</h2>
        <div class="prods">
            <ProductoInactivo class="prod-card" v-for="producto in productos" :key=producto._id :producto="producto" @borrarDelFront="eliminarProd"/>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductoInactivo from '../components/ProductoInactivo';
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'VistaProductoInactivo',
  components: {
    ProductoInactivo
  },
  data(){
    return{
      ...mapGetters(['getApiUrl']),
      productos: [],
    }
  }, created(){      
        axios.get(`${this.getApiUrl()}/productos/inactive-prods`) 
            .then(res => this.productos = res.data)
            .catch(err => console.log(err))
    },
    methods: {
      eliminarProd(id){
        let i = 0;
        let found = false;
        while(i < this.productos.length && found == false){
          if(this.productos[i]._id == id){
            found = true;
          }else{
            i++;
          }
        }
        this.productos.splice(i, 1 );
        }
    }  
  }

</script>

<style scoped>

  .productos{
    margin-top: 50px;
    min-height: 100vh;
    background-color: rgb(250, 249, 250);
    border-radius: 15px;
    -webkit-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
    -moz-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
    box-shadow: 0px 6px 15px 6px rgba(100, 100, 100, 0.6);
    padding: 50px;
    
  }

.prods{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(245px, 2fr));
    grid-gap: 30px;
    place-items: center;
    column-gap: 20px;
    row-gap: 25px;
    align-items: start;

}


</style>
