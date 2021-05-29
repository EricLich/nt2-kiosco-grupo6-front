<template>
  <router-link :to="{ name: 'pag-producto', params: { id: producto.id }}">
    <div class="producto" :key="producto.id">
        <img :src="producto.img"  alt="producto"/>
        <div class="data">
            <h3 class="precio">$ {{ producto.precio }}</h3>
            <h4 class="nomProd">{{ producto.nomProd }}</h4>
            <span class="desc">{{ producto.desc }}</span>
            <button class="agregarAlCarrito">+</button>
        </div>
    </div>
  </router-link>
</template>

<script>
//REVISAR IMAGEN QUE NO SE VE

export default {
  name: 'Producto',
  components: {
    
  }, 
  props: {
      producto: Object
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
    }

    .producto:hover{
        transform: scale(1.01);
        transition: ease-in-out;
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
        width: 20px;
        height: 20px;
        border: none;
        background: rgba(30, 238, 30, 0.753);
        border-radius: 5px;
    }

    .desc{
        margin: 2px 0 3px 0;
        font-size: 12px;
        color: rgb(170, 170, 170);
        font-weight: bold;
    }


</style>