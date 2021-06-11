<template>
  <div class="container container-form">
    <h2>Ingrese sus datos para realizar el pago</h2>
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
    <button @click="generarFactura()" >Pagar</button>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

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
        total: this.total,
      },
    };
  },
  created() {},
  computed:{
      ...mapGetters(['getApiUrl'])
  },
  methods: {
      async generarFactura(){
          for(let prod of this.productos){
              console.log(prod)
              this.factura.productos.push({
                  idProd: prod._id,
                  cant: prod.cant
              })
          }
          await axios.post(`${this.getApiUrl}/facturas`, this.factura)
                .then(res => {
                    if(res.status == 200){
                        alert('Factura generada!')
                    }else{
                        alert('Hubo un error')
                    }
                
                })
                .catch(err => console.log(err))
      },
  },
};
</script>

<style>
</style>