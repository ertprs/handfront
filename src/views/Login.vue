<template>
  <div class="Login">
    <Header />
    <img class="logo" src="./logo.svg" />
    <Loginform /> 
  </div>
</template>

<script>
import Loginform from "@/components/Loginform.vue";
import Header from '@/components/Header.vue';

export default {
  name: 'Login',
  components: {
    Header,
    Loginform
    
  }
}
</script>

<style scoped>
img{
  width: 25vw;
  position: absolute;
  top: 30;
  left: 37%;
}
</style>