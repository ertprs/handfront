<template>
  <v-navigation-drawer permanent absolute color="white">
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { store, mutations } from "@/store.js";

export default {
  methods: {
    closeSidebarPanel: mutations.toggleNav,
  },
  computed: {
    isPanelOpen() {
      return store.isNavOpen;
    },
  },
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Pedidos", icon: "mdi-food" },
        { title: "Vendas", icon: "mdi-cash-usd-outline" },
        { title: "Estoque", icon: "mdi-truck-delivery" },
        { title: "Suporte", icon: "mdi-help-circle" },
      ],
      right: null,
    };
  },
};
</script>

<style>
</style>
