<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Handful</v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="text-right">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Chuck</v-list-item-title>
            <v-list-item-subtitle>Admin</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>
        </v-list-item>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
        >
          <v-list-item
            v-for="(rota, index) in rotas"
            :key="index"
            :to="rota.path"
          >
            <v-list-item-icon>
              <v-icon>{{ rota.icone }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ rota.titulo }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Menu",

  data: () => ({
    drawer: false,
    group: null,

    rotas: [
      {
        titulo: "Dashboard",
        icone: "mdi-view-dashboard",
        path: "/dashboard",
      },
      {
        titulo: "Pedidos",
        icone: "mdi-food",
        path: "/pedidos",
      },
      {
        titulo: "Estoque",
        icone: "mdi-cash-usd-outline",
        path: "/estoque",
      },
      {
        titulo: "Vendas",
        icone: "mdi-truck-delivery",
        path: "/vendas",
      },
      {
        titulo: "Suportes",
        icone: "mdi-help-circle",
        path: "/suporte",
      },
      {
        titulo: "Login",
        icone: "mdi-reply",
        path: "/",
      },
    ],
  }),
};
</script>