<template>
    <div>
        <v-app-bar
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Handful</v-toolbar-title>
    </v-app-bar>
    
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

           <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-food</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Pedidos</v-list-item-title>
          </v-list-item>

           <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-cash-usd-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Estoque</v-list-item-title>
          </v-list-item>

           <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-truck-delivery</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Vendas</v-list-item-title>
          </v-list-item>

            <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-help-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Suporte</v-list-item-title>
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
    }),
  }
</script>