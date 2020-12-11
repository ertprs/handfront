<template>
  <v-row>
    <v-col cols="12" sm="4">
      <Grafico />
    </v-col>
    <v-col cols="12" sm="4">
      <Info />
    </v-col>
    <v-col cols="12" sm="4">
      <itensmaisvendidos />
    </v-col>
    <v-col cols="12" sm="4">
      <Card1 />
    </v-col>
    <v-col cols="12" sm="4">
      <Card />
    </v-col>
    <v-col cols="12" sm="4">
      <Card2 />
    </v-col>
  </v-row>
</template>

<script>
import Grafico from "@/components/Dashboard/Grafico.vue";
import Info from "@/components/Dashboard/Info.vue";
import Itensmaisvendidos from "@/components/Dashboard/Itensmaisvendidos.vue";
import Card from "@/components/Dashboard/Card.vue";
import Card1 from "@/components/Dashboard/Card1.vue";
import Card2 from "@/components/Dashboard/Card2.vue";

export default {
  name: "Dasboard",
  components: {
    Grafico,
    Info,
    Itensmaisvendidos,
    Card,
    Card1,
    Card2,
  },

  created() {
    document.title = this.$route.meta.titulo;
  },
};
</script>

<style>
html {
  height: 100%;
  overflow: auto;
}
</style>