<template>
  <div class="container container-form">
        <h2>Agregar categoria</h2>
      <div class="form-agregado">
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
            },
            token: {headers: {
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidHAiLCJpZCI6InRwIn0.4pHze58Eb6Sdr7u1lM0vguI4QhliGNkAgF27_Zc5p6k'
        }}
        }
    },
    computed:{
        ...mapGetters(['getApiUrl'])
    },
    methods:{
        async agregar(){
            if(this.categoria.nomCat != '' && this.categoria.descCat != ''){
                await axios.post(`${this.getApiUrl}/categoria`, this.categoria, this.token)
                     .then(res => {
                       this.categoria.nomCat = '';
                       this.categoria.descCat = '';
                       if(res.status === 200){
                         alert('Categoría agregada')
                       }else{
                         alert('Hubo un error')
                       } 
                     }) 
                     .catch(err => console.log(err))
            }else{
                alert("No lleno bien los datos")
            }
        }
    },
}
</script>

<style scoped>

.form-agregado{
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    min-height: 35vh;
    min-width: 70%;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0px 4px 6px 4px rgba(151, 151, 151, 0.287);
    padding: 20px;
    justify-content: space-around;
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
</style>