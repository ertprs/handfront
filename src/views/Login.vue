<template>
  <div class="Login">
    <Header />
    <v-img class="logo"
      height="200"
      width="250"
      src="../assets/logo.svg"
    ></v-img>
    <Loginform />
  </div>
</template>

<script>
import Loginform from "@/components/Loginform.vue";

export default {
  name: "Login",
  components: {
    Loginform,
  },
  created () {
    document.title = this.$route.meta.titulo;
  }
};
</script>

<style scoped>
.logo {
  width: 25vw;
  position: absolute;
  top: 20%;
  left: 42%;
}
</style>