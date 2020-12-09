<template>
    <v-row>
      <v-col cols="12" sm="4">
        <Grafico />
      </v-col>
      <v-col cols="12" sm="4">
         <Info /> 
      </v-col>
      <v-col cols="12" sm="4">
         
      </v-col>
      <v-col cols="12" sm="4">
        
      </v-col>
      <v-col cols="12" sm="4">
        <itensmaisvendidos />
        
      </v-col>
      <v-col cols="12" sm="4">
        <Total />
      </v-col>
    </v-row>
</template>

<script>

import Grafico from "@/components/Dashboard/Grafico.vue";
import Info from '@/components/Dashboard/Info.vue';
import Itensmaisvendidos from '@/components/Dashboard/Itensmaisvendidos.vue';
import Total from '../components/Dashboard/Total.vue';

export default {
  name: "Dasboard",
  components: {
    Grafico,
    Info,
    Itensmaisvendidos,
    Total
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