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
};
</script>

<style>
html {
  height: 100%;
  overflow: hidden;
}
</style>