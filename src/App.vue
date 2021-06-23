<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>

import Navbar from './components/Navbar'

export default({
  components: {
    Navbar
  }
})
</script>

<style>

:root{
  --main-color:rgba(12, 10, 134, 0.822);
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container{
  width: 85%;
  margin: auto;
}

.money{
  color: rgb(64, 146, 64);
  font-weight: bold;
}

.container-form{
  margin-top: 30px;
  height: 100vh;
  background-color: rgb(250, 249, 250);
  border-radius: 15px;
  -webkit-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
  -moz-box-shadow: 0px 6px 15px 6px rgba(82,82,82,0.6);
  box-shadow: 0px 6px 15px 6px rgba(100, 100, 100, 0.6);
  padding: 70px;
  display: flex;
  flex-direction: column;
}

</style>
