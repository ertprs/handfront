<template>
  <div class="Dashboard">
    <Burguer />
    <Sidebar />
    <Grafico />
    
  </div>
</template>

<script>
import Burguer from "@/components/menu/Burguer.vue";
import Sidebar from "@/components/menu/Sidebar.vue";
import Grafico from '@/components/Grafico.vue';

export default {
  name: "Dasboard",
  components: {
    Burguer,
    Sidebar,
    Grafico
  },
  created () {
    document.title = this.$route.meta.titulo;
  }
};
</script>

<style>
html {
  height: 100%;
  overflow: hidden;
}
</style>