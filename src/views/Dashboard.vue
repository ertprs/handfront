<template>
  <div class="Dashboard">
    <Burguer />
    <GeneralHeader />
    <Sidebar />
    <Grafico />
    
  </div>
</template>

<script>
import Burguer from "@/components/menu/Burguer.vue";
import GeneralHeader from "@/components/GeneralHeader.vue";
import Sidebar from "@/components/menu/Sidebar.vue";
import Grafico from '@/components/Grafico.vue';

export default {
  name: "Dasboard",
  components: {
    Burguer,
    GeneralHeader,
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