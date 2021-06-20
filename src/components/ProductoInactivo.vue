<template>
  <div class="producto" :key="producto.id">
    <img :src="require(`../../../server/src/assets/img/${this.producto.imgPath}`)"
      alt="producto"
    />
    <div class="data">
      <h3 class="precio">$ {{ producto.precio }}</h3>
      <router-link
        class="link"
        :to="{ name: 'pag-producto', params: { id: producto._id } }"
      >
        <h4 class="nomProd">{{ producto.nomProd }}</h4>
      </router-link>
      <span class="desc">{{ producto.desc }}</span>
      <p v-if="producto.stock < 10">Ultimos {{ producto.stock }} en stock!</p>
        <button @click="activarProducto()" class="activar">Activar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "ProductoInactivo",
  props: {
    producto: Object,
  },
  methods: {
    activarProducto() {
      axios
        .put(`${this.getApiUrl}/productos/activate/${this.producto._id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      this.$emit("borrarDelFront", this.producto._id);
    },
  },
  computed: {
    img() {
      return this.producto.imgPath;
    },
    ...mapGetters(["getApiUrl"]),
  },
};
</script>

<style scoped>

    .producto{
        height: 450px;
        padding: 0 !important;
        min-width: 240px;
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
        transition: ease-in-out 0.1s;
        overflow: hidden;
    }

    .producto:hover{
        transform: scale(1.01);
    }


    img{
        width: 100%;
        height: 100%;
        overflow: hidden;
        place-self: center;
        opacity: 0.9;
        border-radius: 15px 15px 0 0;
    }
    img:hover{
        transition: ease-in-out 0.3s;
        animation: scale linear 0,3s;
        opacity: 1.2;
    }
     
    .data{
        width: 100%;
        height: 70%;
        text-align: left;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        background-color: rgb(241, 241, 241);
        border-radius: 0 0 15px 15px;
    }


    .nomProd{
        margin-top: 2px;
        font-size: 20px;
        color: rgb(27, 27, 27);
    }

    .activar{
        align-self: flex-end;
        border-radius: 7px;
        padding: 7px;
        border: 1px solid rgb(25, 187, 60);
        color: white;
        background-color: rgb(25, 187, 60);
        font-weight: bold;
        cursor: pointer;
        transition: ease-in-out 3ms;
    }

    .activar:hover{
        color: rgb(25, 187, 60);
        background-color: #fff;
        
    }

    .desc{
        margin: 2px 0 3px 0;
        font-size: 12px;
        color: rgb(170, 170, 170);
        font-weight: bold;
    }

    

</style>