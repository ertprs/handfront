<template>
    <v-row>
      <v-col cols="12" sm="4">
        <Grafico />
      </v-col>
      <v-col cols="12" sm="4">
        <Grafico />
      </v-col>
      <v-col cols="12" sm="4">
        <Graficopedidos />
      </v-col>
      <v-col cols="12" sm="4">
        <Sparkline />
      </v-col>
      <v-col cols="12" sm="4">
        <Sparkline />
      </v-col>
      <v-col cols="12" sm="4">
        <Sparkline />
      </v-col>
    </v-row>
</template>

<script>
import Grafico from "@/components/Grafico.vue";
import Sparkline from '../components/Sparkline.vue';
import Graficopedidos from '../components/Graficopedidos.vue';

export default {
  name: "Dasboard",
  components: {
    Grafico,
    Sparkline,
    Graficopedidos,
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