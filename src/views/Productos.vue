<template>
  <div class="productos container">
    <Producto :producto="producto"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Producto from '../components/Producto';

export default {
  name: 'Productos',
  components: {
    Producto
  },
  data(){
    return{
      producto: {
        id: 1,
        img: '../assets/img/prueba.jpg',
        precio: 10,
        nomProd: 'Pescadito',
        desc: 'Pescado rico',
        categoria: 'Pescado'
      }
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
  }

</style>
