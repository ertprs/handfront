<template>
    <v-row>
      <v-col cols="12" sm="6">
        <Grafico />
      </v-col>
      <v-col cols="12" sm="6">
        <Grafico />
      </v-col>
      <v-col cols="12" sm="6">
        <Grafico />
      </v-col>
      <v-col cols="12" sm="6">
        <Grafico />
      </v-col>
    </v-row>
</template>

<script>
import Grafico from "@/components/Grafico.vue";

export default {
  name: "Dasboard",
  components: {
    Grafico,
  },
  created() {
    document.title = this.$route.meta.titulo;
  },
};
</script>

<style>
html {
  height: 100%;
  overflow: hidden;
}
</style>