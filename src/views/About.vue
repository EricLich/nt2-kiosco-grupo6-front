<template>
  <div class="container about">
    <h2>Quienes somos</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nostrum in
      numquam facilis suscipit odio blanditiis impedit quo natus. Earum veniam
      quod, at sit itaque quasi accusamus dignissimos inventore recusandae.
    </p>
    <div class="team">
      <div class="integrante">
        <img src="../assets/img/Agus.png" alt="" />
        <div class="data">
          <h3>Agustina Scarafia</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure commodi
            quaerat esse. Libero error iusto reprehenderit ea omnis sint aliquid
            quasi perferendis aut illum, doloremque excepturi nobis inventore
            numquam perspiciatis?
          </p>
        </div>
      </div>
      <div class="integrante">
        <img src="../assets/img/Augus.png" alt="" />
        <div class="data">
          <h3>Augusto Gandolfo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure commodi
            quaerat esse. Libero error iusto reprehenderit ea omnis sint aliquid
            quasi perferendis aut illum, doloremque excepturi nobis inventore
            numquam perspiciatis?
          </p>
        </div>
      </div>
      <div class="integrante">
        <img src="../assets/img/Eric.png" alt="" />
        <div class="data">
          <h3>Eric Lichtensztein</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure commodi
            quaerat esse. Libero error iusto reprehenderit ea omnis sint aliquid
            quasi perferendis aut illum, doloremque excepturi nobis inventore
            numquam perspiciatis?
          </p>
        </div>
      </div>
      <div class="integrante">
        <img src="../assets/img/Tom.png" alt="" />
        <div class="data">
          <h3>Tomas Dupuy DeLome</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure commodi
            quaerat esse. Libero error iusto reprehenderit ea omnis sint aliquid
            quasi perferendis aut illum, doloremque excepturi nobis inventore
            numquam perspiciatis?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about {
  margin-top: 20px;
  width: 90%;
  min-height: 100vh;
  padding: 25px;
  display: flex;
  flex-direction: column;
  background-color: rgb(250, 249, 250);
  border-radius: 15px;
  -webkit-box-shadow: 0px 6px 15px 6px rgba(82, 82, 82, 0.6);
  -moz-box-shadow: 0px 6px 15px 6px rgba(82, 82, 82, 0.6);
  box-shadow: 0px 6px 15px 6px rgba(100, 100, 100, 0.6);
}

.team {
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(245px, 2fr));
  grid-gap: 30px;
  place-items: center center;
  column-gap: 20px;
  row-gap: 25px;
  align-items: start;
}

.integrante {
  height: 450px;
  padding: 0 !important;
  min-width: 240px;
  background-color: #fff;
  border-radius: 15px;
  -webkit-box-shadow: 0px 6px 15px 6px rgba(82, 82, 82, 0.6);
  -moz-box-shadow: 0px 6px 15px 6px rgba(82, 82, 82, 0.6);
  box-shadow: 0px 6px 15px 6px rgba(151, 151, 151, 0.6);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  transition: ease-in-out 0.2s;
  overflow: hidden;
  filter: grayscale(100%)
}

.integrante img{
  width: 100%;
  overflow: hidden;
}

.integrante:hover{
    filter: grayscale(0);
    transform: scale(1.05);
}

.data{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  text-align: justify;
}

.data h3{
  margin: 10px 0;
}

</style>
