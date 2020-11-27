<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="primary lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
       
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Fortaleza, CE</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<script>
  export default {
    name: "Footer",

    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style scoped>
.v-card {
  width: 100vw;
}
</style>