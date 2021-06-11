<template>
  <div class="container container-form">
      <h2>Agregar categoria</h2>
        <div class="form-input">
            <label for="nomCat">Nombre de Categoría:</label>
            <input name="nomCat" v-model="categoria.nomCat" placeholder="Inserte el nombre de la nueva categoria">
        </div>
        <div class="form-input">
            <label for="descCat">Descripcion de Categoría:</label>
            <input name="descCat" v-model="categoria.descCat" placeholder="Inserte la descripcion de la nueva categoria">
        </div>
        <button @click="agregar()" >Agregar</button>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'


export default {
    data(){
        return{
            categoria: {
                nomCat: '',
                descCat: ''
            }
        }
    },
    computed:{
        ...mapGetters(['getApiUrl'])
    },
    methods:{
        async agregar(){
            if(this.categoria.nomCat != '' && this.categoria.descCat != ''){
                await axios.post(`${this.getApiUrl}/categoria`, this.categoria)
                     .then(res => console.log(res))
                     .catch(err => console.log(err))
            }else{
                alert("No lleno bien los datos")
            }
        }
    },
}
</script>

<style>

</style>