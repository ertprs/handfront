<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <Menu />
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Menu from './components/menu/Menu.vue';

export default {
  name: "App",

  components: {
     Menu
  },


  data: () => ({
    //
  }),
};
</script>
