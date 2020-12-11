<template>
  <v-app>
    <Menu v-if="$route.path !== '/'" />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Menu from "./components/menu/Menu.vue";

export default {
  name: "App",

  components: {
    Menu,
  },

  data: () => ({
  }),
};
</script>