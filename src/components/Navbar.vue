<template>
    <div id="nav">
        <div class="container nav-centro">
            <div class="logo-busqueda">
                <router-link to="/productos">
                    Tienda - Grupo 6
                </router-link>
                <div class="busqueda">
                    hola
                </div>
            </div>
            <div class="links">
                <router-link to="/productos">Home</router-link> 
                <router-link to="/about">Nosotros</router-link>
                <router-link to="/agregar-producto">Agregar prod</router-link>
                <router-link to="/agregar-categoria">Agregar cat</router-link>
                <router-link to="/carrito" class="carrito">
                    <p> {{ cantEnCarrito == 0 ? 0 : cantEnCarrito}} </p>        
                    <i class="fas fa-shopping-cart"></i>
                </router-link>
            </div>
        </div>
    </div>  
</template>

<script>

export default {
    data(){
        return{

        }
    },
    computed: {
        cantEnCarrito(){
            return this.$store.getters.getCantEnCarrito;
        }
    } 
    
}
</script>

<style scoped>
    #nav{     
        display: flex;
        align-items: center;
        background-color: var(--main-color);
        width: 98%;
        height: 80px;
        margin: 10px auto;
        border-radius: 15px;
        -webkit-box-shadow: 0px 10px 20px 10px rgba(82,82,82,0.6);
        -moz-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
        box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
        opacity: 0.95;
    }
    .nav-centro{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .logo-busqueda{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 20%;
        justify-content: space-between;
    }

    #nav a {
        font-weight: bold;
        color: white;
        text-decoration: none;
    }

    #nav a.router-link-exact-active {
        color: #b1b1b1;
    }

    .links{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 35%;
        min-width: 35%;

    }

    .carrito{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: -7px;
    }

    .carrito i{
        font-size: 18px;
    }

    .carrito p{
        font-size: 14px;
        font-weight: bold;
        margin-left: 30px;
        margin-bottom: -5px;
    }


</style>