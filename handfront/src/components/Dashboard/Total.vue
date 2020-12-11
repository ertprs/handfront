  
<template>
  <v-card
    width="300"
    height="190"
    color="success"
    dark
  > 
        <v-toolbar
          class="mb-2"
          flat
          color="success"
          dark      
        >
          <v-toolbar-title>Total:</v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
            <div class="display-3 font-weight-bold text-center" >
            0,00 R$
            </div>
        </v-card-text>
  </v-card>

</template>

<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: item,
            totalvendas: totalvendas,
          },

        ],
      }
    },
  }
</script>

<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>

