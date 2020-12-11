<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <Form />
    </v-col>
  </v-row>
</template>

<script>

import Form from "@/components/Estoque/Form.vue";

export default {
  name: "Estoque",

  components: {
    Form
  },

  created() {
    document.title = this.$route.meta.titulo;
  },
};
</script>

<style>
</style>