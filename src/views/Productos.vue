<template>
  <div class="productos container">
    <Producto v-for="producto in productos" :key=producto._id :producto="producto" @borrarDelFront="eliminarProd"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Producto from '../components/Producto';
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'Productos',
  components: {
    Producto
  },
  data(){
    return{
      ...mapGetters(['getApiUrl']),
      productos: [],
    }
  }, created(){      
        axios.get(`${this.getApiUrl()}/productos`) 
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
    height: 1000px;
    background-color: rgb(250, 249, 250);
    border-radius: 15px;
    -webkit-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
    -moz-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
    box-shadow: 0px 6px 15px 6px rgba(100, 100, 100, 0.6);
    padding: 70px;
    display: flex;
  
  }



</style>
