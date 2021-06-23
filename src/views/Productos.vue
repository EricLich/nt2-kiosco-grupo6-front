<template>
  <div class="container">
    <div class="catsProds">
      <!-- <Producto class="prod-card" v-for="producto in productos" :key=producto._id :producto="producto" @borrarDelFront="eliminarProd"/> -->
      <CategoriaDeProductos v-for="prodsCatActual in prodsCat" :key="prodsCatActual.idCat" :prodsCat="prodsCatActual" />
    </div>
  </div>
</template>

<script>
//import Producto from '../components/Producto';
import CategoriaDeProductos from '../components/CategoriaDeProductos.vue'
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'Productos',
  components: { 
    CategoriaDeProductos
  },
  data(){
    return{
      ...mapGetters(['getApiUrl']),
      productos: [],
      categorias: [],
      prodsCat: []
    }
  }, created(){      
        let token = {headers: {
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidHAiLCJpZCI6InRwIn0.4pHze58Eb6Sdr7u1lM0vguI4QhliGNkAgF27_Zc5p6k'
        }}
        //traigo productos
        axios.get(`${this.getApiUrl()}/productos`, token) 
            .then(res => {
              this.productos = res.data.reverse()
              //traigo categorias
              axios.get(`${this.getApiUrl()}/categoria`, token) 
                  .then(res => {
                    this.categorias = res.data;
                    for(let categoria of this.categorias){
                      let prods = []
                      for(let i = 0; i < this.productos.length; i++){
                        if(this.productos[i].categoriaId == categoria._id){
                          prods.push(this.productos[i]);
                          this.productos.splice(i, 1);
                          i--;
                        }
                      }
                      //creo objetos con array de objetos, id de cat, nombrecat y descripcion
                      this.prodsCat.push({
                        idCat: categoria._id, 
                        nomCat: categoria.nomCat, 
                        descCat: categoria.descCat,
                        productos: prods
                      })
                    }
                  })
                  .catch(err => console.log(err)) 

            })
            .catch(err => console.log(err)) 
        
    },
    methods: {
      /* eliminarProd(id){
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
        }*/
    }   
  }

</script>

<style scoped>

  /* .productos{
    margin-top: 50px;
    min-height: 100vh;
    background-color: rgb(250, 249, 250);
    border-radius: 15px;
    -webkit-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
    -moz-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
    box-shadow: 0px 6px 15px 6px rgba(100, 100, 100, 0.377);
    padding: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 30px;
    place-items: center center;
    column-gap: 20px;
    row-gap: 25px;
    align-items: start;
  } */

  .catsProds{
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    width: 100%;
    
  }


</style>
