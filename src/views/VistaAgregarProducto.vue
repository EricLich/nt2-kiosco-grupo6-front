<template>
  <div class="container container-form">
    <h2 v-if="!edit">Agregar un producto</h2>
    <h2 v-else>Editar producto</h2>
    <form enctype="multipart/form-data" class="form-agregado">
      <div class="form-input">
        <label for="nombre">Nombre:</label>
        <input
          v-model="producto.nomProd"
          name="nombre"
          type="text"
          placeholder="Introduce el nombre del producto"
          @change="mostrar"
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
        <label for="img">Imagen:</label><span v-if="this.edit">No es necesario subir una imágen</span>
        <input
          required
          type="file"
          name="img"
          placeholder="Introduce el nombre del producto"
          @change="archivoSeleccionado"
        />
      </div>

      <button class="agregar" @click="agregarOEditar">
        {{ this.id ? "Editar" : "Agregar" }}
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  props: ["id", "edit"],
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
      token: {headers: {
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidHAiLCJpZCI6InRwIn0.4pHze58Eb6Sdr7u1lM0vguI4QhliGNkAgF27_Zc5p6k'
        }}
    };
  },
  computed: {
    ...mapGetters(["getApiUrl"]),
  },
  mounted() {
    axios
      .get(`${this.getApiUrl}/categoria`, this.token)
      .then((res) => {
          this.categorias = res.data.sort((a, b) => a.nomCat > b.nomCat);
      } )
      .catch((err) => console.log(err));
    if (this.id != null) {
      axios
        .get(`${this.getApiUrl}/productos/${this.id}`, this.token)
        .then((res) => {
          this.producto.nomProd = res.data.nomProd;
          this.producto.desc = res.data.desc;
          this.producto.categoriaId = res.data.categoriaId;
          this.producto.precio = res.data.precio;
          this.producto.imgPath = res.data.imgPath;
          this.producto.stock = res.data.stock;
        })
        .catch((err) => console.log(err));
    } else {
      this.producto.nomProd = "";
      this.producto.desc = "";
      this.producto.categoriaId = "";
      this.producto.precio = null;
      this.producto.imgPath = "";
      this.producto.stock = null;
    }
  },
  methods: {
    agregarOEditar(event) {
      event.preventDefault();
      if (!this.edit) {
        const formData = new FormData();
        formData.append("img", this.imagenSubida);
        this.producto.imgPath = this.imagenSubida.name;
        axios
          .post(`${this.getApiUrl}/productos`, this.producto, this.token)
          .then((res) => {
            console.log(res);
            axios
              .post(`${this.getApiUrl}/subir-imagen`, formData, this.token)
              .then((res) => {
                res.send({ message: "Imagen Subida!" });
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
        alert("Producto agregado");
      } else {
        if (this.imagenSubida != null) {
          const formData = new FormData();
          formData.append("img", this.imagenSubida);
          this.producto.imgPath = this.imagenSubida.name;
          axios
            .put(`${this.getApiUrl}/productos/${this.id}`, this.producto, this.token)
            .then((res) => {
              console.log(res);
              axios
                .post(`${this.getApiUrl}/subir-imagen`, formData, this.token)
                .then((res) => {
                  res.send({ message: "Imagen Subida!" });
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
          alert("Producto editado");
        } else {
          axios
            .put(`${this.getApiUrl}/productos/${this.id}`, this.producto, this.token)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => console.log(err));
          alert("Producto editado");
        }
      }
      (this.producto.nomProd = ""),
      (this.producto.desc = ""),
      (this.producto.precio = null);
      this.producto.categoriaId = "";
      this.producto.imgPath = "";
      this.producto.stock = null;
      this.imagenSubida = null;
    },
    archivoSeleccionado(event) {
      this.imagenSubida = event.target.files[0];
    },
    mostrar(){
      console.log(this.producto.nomProd)
    }
  },
};
</script>

<style scoped>
.form-agregado {
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

.form-input {
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 10px;
}

.form-input label {
  margin-bottom: 5px;
}

.form-input input {
  width: 100%;
  border: 1px solid rgba(128, 128, 128, 0.335);
  border-radius: 10px;
  padding: 10px;
  transition: ease-in-out 10ms;
}

input[type="file"] {
  padding-bottom: 30px;
  border: none;
}

.form-agregado button {
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
.form-agregado button:hover {
  transform: scale(1.02);
  background-color: #fff;
  color: rgb(79, 186, 79);
}

.select {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.select label {
  margin-bottom: 0;
}

select {
  width: 40%;
  text-align: center;
  padding: 5px;
  background-color: rgba(243, 243, 243, 0.733);
  border: 1px solid rgba(128, 128, 128, 0.383);
  border-radius: 10px;
  font-size: 14px;
  margin-left: 10px;
}
</style>