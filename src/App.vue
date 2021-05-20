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
  --main-color:rgba(12, 10, 134, 0.733);
}

*{
  padding: 0%;
  margin: 0;
  box-sizing: border-box;
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

</style>
