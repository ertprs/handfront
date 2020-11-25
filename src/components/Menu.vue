<template>
  <div>
    <v-navigation-drawer app fixed temporary v-model="menu">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark dense>
      <v-app-bar-nav-icon @click.stop="menu = !menu"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <span class="font-weight-bold" transition="scale-transition">Hand</span>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Menu",

  data() {
    return {
      menu: false,
      items: [
        { title: "Home", icon: "mdi-home", link: '/' },
        { title: "Cadastro", icon: "mdi-account", link: '/cadastro' },
        // { title: "Photos", icon: "mdi-image" },
        // { title: "About", icon: "mdi-help-box" },
      ],
    };
  },
};
</script>
