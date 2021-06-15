<template>
  <div class="container container-form">
    <h2>Agregar un producto</h2>
    <form enctype="multipart/form-data" class="form-agregado">
      <div class="form-input">
        <label for="nombre">Nombre:</label>
        <input
          v-model="producto.nomProd"
          name="nombre"
          type="text"
          placeholder="Introduce el nombre del producto"
        />
      </div>
      <div class="form-input select">
        <label for="categoria">Categoria:</label>
        <select v-model="producto.categoriaId" name="categoria" required id="">
          <option value="" disabled selected>-- Seleccionar --</option>
          <option v-for="cat in categorias" :value="cat._id" :key="cat._id">
            {{ cat.nomCat }}
          </option>
        </select>
      </div>
      <div class="form-input">
        <label for="precio">Precio:</label>
        <input
          v-model="producto.precio"
          name="precio"
          type="text"
          placeholder="Introduce el precio del producto"
        />
      </div>
      <div class="form-input">
        <label for="stock">Stock:</label>
        <input
          v-model="producto.stock"
          name="stock"
          type="text"
          placeholder="Introduce el stock del producto"
        />
      </div>
      <div class="form-input">
        <label for="desc">Descripcion:</label>
        <input
          v-model="producto.desc"
          name="desc"
          type="text"
          placeholder="Introduce la descripcion del producto"
        />
      </div>
      <div class="form-input">
        <label for="img">Imagen:</label>
        <input
          required
          type="file"
          name="img"
          placeholder="Introduce el nombre del producto"
          @change="archivoSeleccionado"
        />
      </div>

      <button class="agregar" @click="agregar">
        {{ this.id ? "Editar" : "Agregar" }}
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  props: ["id"],
  data() {
    return {
      categorias: [],
      producto: {
        nomProd: "",
        desc: "",
        categoriaId: "",
        precio: null,
        imgPath: "",
        stock: null,
      },
      imagenSubida: null,
    };
  },
  computed: {
    ...mapGetters(["getApiUrl"]),
  },
  mounted() {
    axios
      .get(`${this.getApiUrl}/categoria`)
      .then((res) => (this.categorias = res.data))
      .catch((err) => console.log(err));
    if (this.id != "") {
      axios
        .get(`${this.getApiUrl}/productos/${this.id}`)
        .then((res) => {
          this.producto.nomProd = res.data.nomProd;
          this.producto.desc = res.data.desc;
          this.producto.categoriaId = res.data.categoriaId;
          this.producto.precio = res.data.precio;
          this.producto.imgPath = res.data.imgPath;
          this.producto.stock = res.data.stock;
        })
        .catch((err) => console.log(err));
    }else{
      this.producto.nomProd = ''
      this.producto.desc = ''
      this.producto.categoriaId = ''
      this.producto.precio = null
      this.producto.imgPath = ''
      this.producto.stock = null
    }
  },
  methods: {
    agregar(event) {
      event.preventDefault();
      const formData = new FormData();
      formData.append("img", this.imagenSubida);
      this.producto.imgPath = this.imagenSubida.name;
      axios
        .post(`${this.getApiUrl}/productos`, this.producto)
        .then((res) => {
          console.log(res);
          axios
            .post(`${this.getApiUrl}/subir-imagen`, formData)
            .then((res) => {
              this.producto.nomProd = "",
              this.producto.desc = "",
              this.producto.precio = null;
              this.producto.categoriaId = "";
              this.producto.imgPath = "";
              this.producto.stock = null;
              this.imagenSubida = null;
              res.send({ message: "Imagen Subida!" });
            })
            .catch((err) => console.log(err));
          alert("Producto agregado");
        })
        .catch((err) => console.log(err));
    },
    archivoSeleccionado(event) {
      this.imagenSubida = event.target.files[0];
    },
  },
};
</script>

<style scoped>

  .form-agregado{
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    min-height: 60vh;
    min-width: 70%;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 6px 4px rgba(151, 151, 151, 0.287);
    padding: 20px;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  .form-input{
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 10px;
  }

  .form-input label{
    margin-bottom: 5px;
  }

  .form-input input{
    width: 100%;
    border: 1px solid rgba(128, 128, 128, 0.335);
    border-radius: 10px;
    padding: 10px;
    transition: ease-in-out 10ms;
  }



  input[type="file"]{
    padding-bottom: 30px;
    border: none;
  }

  .form-agregado button{
    align-self: flex-end;
    background-color: rgb(79, 186, 79);
    padding: 5px 15px;
    border: 2px solid rgb(79, 186, 79);
    border-radius: 5px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    margin-top: 5px;
    transition: ease-in-out 10ms;
    box-shadow: 0px 2px 5px 2px rgba(151, 151, 151, 0.287);
  }
  .form-agregado button:hover{
    transform: scale(1.02);
    background-color: #fff;
    color:rgb(79, 186, 79);
  }

  .select{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .select label{
    margin-bottom: 0;
  }

  select{
    width: 40%;
    text-align: center;
    padding:5px;
    background-color: rgba(243, 243, 243, 0.733);
    border: 1px solid rgba(128, 128, 128, 0.383);
    border-radius: 10px;
    font-size: 14px;
    margin-left: 10px;
  }


</style>