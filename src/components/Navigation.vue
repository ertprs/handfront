<template>
  <v-navigation-drawer class="primary" dark permanent>
    <v-img
      max-height="150"
      max-width="170"
      src="../assets/logo.svg"
    ></v-img>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Pedidos", icon: "mdi-food" },
        { title: "Vendas", icon: "mdi-cash-usd-outline" },
        { title: "Estoque", icon: "mdi-truck-delivery" },
        { title: "Configurações", icon: "mdi-application-settings" },
        { title: "Suporte", icon: "mdi-help-circle" },   
      ],
    };
  },
};
</script>

<style>
</style>