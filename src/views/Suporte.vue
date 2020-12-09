<template>
     <v-row>
      <v-col cols="12" sm="4">

      </v-col>
      <v-col cols="12" sm="4">
        <Ajuda />
      </v-col>
      <v-col cols="12" sm="4">
        
      </v-col>
      <v-col cols="12" sm="4">
        
      </v-col>
      <v-col cols="12" sm="4">
        
      </v-col>
      <v-col cols="12" sm="4">
        
      </v-col>
    </v-row>
</template>

<script>

import Ajuda from "@/components/Suporte/Ajuda.vue";

export default {
name: "Suporte",
  components: {
    Ajuda,
  },

created () {
    document.title = this.$route.meta.titulo;
  }
}
</script>

<style>

</style>