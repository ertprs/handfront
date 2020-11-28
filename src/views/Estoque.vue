<template>
  <h1>estoque</h1>
</template>

<script>
import Nav from "../components/menu/Nav.vue";
export default {
  name: "Estoque",
  
  components: { Nav },

  created () {
    document.title = this.$route.meta.titulo;
  }
};
</script>

<style>
</style>