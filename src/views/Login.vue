<template>
  <div class="Login">
    <Header />
    <!--img class="logo" src="./assets/logo.svg" /> -->
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
import Header from "@/components/Header.vue";

export default {
  name: "Login",
  components: {
    Header,
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