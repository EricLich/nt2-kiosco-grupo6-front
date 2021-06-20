<template>
  <div class="container container-form">
    <h2 class="titulo">Ingrese sus datos para realizar el pago</h2>
    <form class="form-agregado">
      <div class="form-input">
        <label for="nombre">Nombre:</label>
        <input
          required
          name="nombre"
          v-model="factura.nombre"
          placeholder="Inserte su nombre"
        />
      </div>
      <div class="form-input">
        <label for="apellido">Apellido:</label>
        <input
          required
          name="apellido"
          v-model="factura.apellido"
          placeholder="Inserte su apellido"
        />
      </div>
      <div class="form-input">
        <label for="dni">DNI:</label>
        <input
          required
          name="dni"
          v-model="factura.dni"
          placeholder="Inserte su DNI"
        />
      </div>
      <div class="form-input">
        <label for="telefono">Telefono:</label>
        <input
          required
          name="telefono"
          v-model="factura.telefono"
          placeholder="Inserte su número de telefono"
        />
      </div>
      <div class="form-input">
        <label for="numTarj">Número de tarjeta:</label>
        <input
          required
          name="numTarj"
          v-model="factura.numTarjeta"
          placeholder="Inserte su número de tarjeta"
        />
      </div>
      <h2 class="money">${{ this.total }}</h2>
      <button @click="generarFactura($event)">Pagar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  props: ["productos", "total"],
  data() {
    return {
      factura: {
        nombre: "",
        apellido: "",
        dni: "",
        telefono: "",
        numTarjeta: "",
        productos: [],
        total: this.total
      },
    };
  },
  created() {
  },
  computed: {
    ...mapGetters(["getApiUrl"]),
  },
  methods: {
    generarFactura(e) {
      e.preventDefault()
      if(this.productos.length > 1){
        for (let prod of this.productos) {
          this.factura.productos.push({
            idProd: prod._id,
            cant: prod.cant,
          });
        }
      }else{
        this.factura.productos.push({
            idProd: this.productos[0]._id,
            cant: this.productos[0].cant,
          });
      }    
      axios.post(`${this.getApiUrl}/facturas`, this.factura)
        .then((res) => {
          console.log(res)
            alert("Factura generada!");
            this.$store.dispatch("vaciarCarrito");
        })
        .catch((err) => console.log(err));
    }, 
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

.titulo {
  align-self: center;
}

.money {
  align-self: flex-end;
}
</style>