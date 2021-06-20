<template>
  <div class="producto" :key="producto.id">
    <img       :src="require(`../../../server/src/assets/img/${this.producto.imgPath}`)"
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
      <div class="selector-cant">
        <input
          type="number"
          :max="producto.stock"
          min="1"
          v-model="cant"
          class="cantidad"
        />
        <i
          class="fas fa-cart-plus agregarAlCarrito"
          @click="agregarAlCarrito()"
        ></i>
      </div>
      <div class="botonera">
        <router-link
          :to="{ name: 'pag-editar-prod', params: { id: producto._id } }"
          class="editar"
          ><i class="fa fa-pencil" aria-hidden="true"></i
        ></router-link>
        <i @click="desactivarProducto()" class="fa fa-trash eliminar"></i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "Producto",
  data() {
    return {
      cant: 0,
    };
  },
  components: {},
  props: {
    producto: Object,
  },
  methods: {
    agregarAlCarrito() {
      if (this.cant > 0) {
        this.$store.dispatch("agregarAlCarrito", {
          producto: this.producto,
          cant: this.cant,
        });
        this.cant = 0;
      } else {
        alert("Tenes que seleccionar al menos un producto");
      }
    },
    desactivarProducto() {
      axios
        .delete(`${this.getApiUrl}/productos/${this.producto._id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      this.$emit("borrarDelFront", this.producto._id);
    },
  },
  computed: {
    img() {
      return this.producto.imgPath;
    },
    ...mapGetters(["getApiUrl", "getcantEnCarrito"]),
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

    .precio{
        color: rgb(107, 175, 43);
    }

    .nomProd{
        margin-top: 2px;
        font-size: 20px;
        color: rgb(27, 27, 27);
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

    .editar{
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        background: yellow;
        color: rgb(255, 255, 255);
        border-radius: 5px;
        padding: 2px 6px 2px 6px;
        margin-right: 5px;
        box-shadow: 0px 2px 5px 2px rgba(151, 151, 151, 0.287);
        transition: ease-in-out 0.1s;
        border: 1px solid yellow;
    }
    .editar:hover{
        background-color: #fff;
        color: yellow;
        border-color: yellow;
    }

    .eliminar{
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

    .eliminar:hover{
        background-color: #fff;
        color: red;
        border-color: red;
    }

    .botonera{
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        padding: 0;
        margin-top: 10px;
    }

    .botonera button{
        margin-left: 5px;
    }

    .selector-cant{
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }

    .cantidad{
        width: 85%;
        padding: 9px 4px 9px 4px;
        border-radius: 5px;
        border: none;
        box-shadow: 0px 2px 5px 2px rgba(151, 151, 151, 0.287);
    }

</style>