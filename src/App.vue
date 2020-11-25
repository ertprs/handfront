<template>
  <v-app>
    <Menu />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Menu from "./components/Menu";

export default {
  name: "App",

  components: {
    Menu,
  },

  data: () => ({
    //
  }),
};
</script>
