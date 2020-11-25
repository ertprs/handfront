<template>
  <v-app>
    <Menu />
    <v-main>
      <v-container class="fill-height">
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Menu from "./components/Menu";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",

  components: {
    Menu,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
