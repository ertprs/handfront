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