<template>
    <div id="nav">
        <div class="container nav-centro">
            <div class="logo-busqueda">
                <router-link to="/">
                    asd
                </router-link>
                <div class="busqueda">
                    hola
                </div>
            </div>
            <div class="links">
                <router-link to="/">Home</router-link> 
                <router-link to="/productos">Productos</router-link>
                <router-link to="/about">Nosotros</router-link>
                <router-link to="/carrito" class="carrito">
                    <p>{{items}}</p>        
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
            items: 9
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
        -webkit-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
        -moz-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
        box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
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
        width: 25%;

    }

    .carrito{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .carrito i{
        font-size: 18px;
    }

    .carrito p{
        font-size: 14px;
        font-weight: bold;
        margin-left: 35px;
    }


</style>