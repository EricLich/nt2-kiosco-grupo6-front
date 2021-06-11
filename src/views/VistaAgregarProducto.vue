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
      <div class="form-input">
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
</style>