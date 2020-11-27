<template>
    <div class="generalheader">
      <h1 id="title">HANDFUL COXINHAS</h1>
    </div>
</template>

<script>
  export default {
    name: "GeneralHeader",
  
}
</script>

<style scoped>  

.generalheader {
  position: fixed;
  top: 0%;
  left:0%;
  background-color: #FC4954;
  height: 10vh;
  width: 100vw; 
  display: flex;
  align-items: center;
  justify-content: left;
  z-index: 5;  
}
.generalheader h1 {
  padding-left: 31px;
  font-family: DM Sans;
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 35px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  color: #FFFFFF;
}
</style>