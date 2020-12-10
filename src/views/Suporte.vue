<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-img
        class="logo"
        src="../assets/ajustes.jpg"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Suporte",
  components: {},

  created() {
    document.title = this.$route.meta.titulo;
  },
};
</script>

<style>
</style>