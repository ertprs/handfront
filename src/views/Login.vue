<template>
  <div class="Login">
    <Header />
    <Loginform /> 
  </div>
</template>

<script>
import Loginform from "@/components/Loginform.vue";
import Header from '@/components/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Loginform
    
  }
}
</script>

<style scoped>
.Login{
  width: 100vw;
  height: 100vh;
}
</style>