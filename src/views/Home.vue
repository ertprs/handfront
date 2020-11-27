<template>
  <div class="Home">
    <Nav />
    <Grafico />
    
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Grafico from '../components/Grafico.vue';
export default {
  name: "Dasboard",
  components: {
    Nav,
    Grafico
  },
};
</script>

<style>
</style>