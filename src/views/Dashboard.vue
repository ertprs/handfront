<template>
  <div class="Dashboard">
    <GeneralHeader />
    <Nav />
    <Grafico />
    
  </div>
</template>

<script>
import GeneralHeader from "@/components/GeneralHeader.vue";
import Nav from "@/components/Nav.vue";
import Grafico from '../components/Grafico.vue';
export default {
  name: "Dasboard",
  components: {
    GeneralHeader,
    Nav,
    Grafico
  },
};
</script>

<style>
</style>