<template>
  <div class="generalheader">
    <div class="center">
        <h1 id="title">HANDFULL COXINHAS</h1>
    </div>
    <div class="right">
        <h1 id="id">Chuck Norris</h1>
        <p>ADMIN</p>              
    </div>
    <img src="../assets/chuck.svg" alt="Chuck Norris"> 
  </div>
</template>

<script>

export default {
  name: "GeneralHeader",
};
</script>

<style scoped>
.generalheader {
  position: fixed;
  top: 0%;
  left: 0%;
  background-color: #fc4954;
  height: 10vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
}
#title {
  padding-left: 450px;
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 35px;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.5px;
  color: white;
}
#id {
  display: block;
  justify-content: right;
  align-items: center;
  margin-left: 260px;
  padding-top: 10px;
 
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 26px;
  text-align: right;
  letter-spacing: 0.01em;
  color: white;
}
p {
font-style: normal;
font-weight: 900;
font-size: 0.8rem;
line-height: 14px;
text-align: right;
letter-spacing: 0.01em;
text-transform: uppercase;
color: white;
}
img {
    margin-left: 20px;
}
</style>
