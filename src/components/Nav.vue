<template>
    <v-navigation-drawer permanent absolute dark color="primary">
        
       <v-img
            max-height="120"
            max-width="150"
            src="../assets/logo.svg"
        ></v-img>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
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
  export default {
    data () {
      return {
        items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Pedidos", icon: "mdi-food" },
        { title: "Vendas", icon: "mdi-cash-usd-outline" },
        { title: "Estoque", icon: "mdi-truck-delivery" },
        { title: "Configurações", icon: "mdi-application-settings" },
        { title: "Suporte", icon: "mdi-help-circle" },   
        ],
        right: null,
      }
    },
  }
</script>        
        
        
        
     