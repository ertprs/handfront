<template>
  <div class="Dashboard">
    <Grafico />
    
  </div>
</template>

<script>
import Grafico from '@/components/Grafico.vue';

export default {
  name: "Dasboard",
  components: {
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