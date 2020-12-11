<template>
  <div class="Login">
    <v-row>
      <v-col>
        <Loginform />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Loginform from "@/components/Login/Loginform.vue";

export default {
  name: "Login",
  components: {
    Loginform,
  },
  created() {
    document.title = this.$route.meta.titulo;
  },
};
</script>

<style scoped>
</style>