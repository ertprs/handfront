<template>
  <div class="sidebar">
    <div
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
      v-if="isPanelOpen"
    ></div>
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <slot>
          <v-navigation-drawer permanent absolute dark color="primary">
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
        </slot>
      </div>
    </transition>
  </div>
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
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: #130f40;
  position: fixed;
  left: 0;
  top: 10;
  height: 100vh;
  z-index: 998;
  padding: 3rem 20px 2rem 20px;
  width: 300px;
}
</style>
