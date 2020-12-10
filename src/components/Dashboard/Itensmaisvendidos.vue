  
<template>
  <v-card
    width="600"
    height="364"
    loading
  > 
        <v-toolbar
          class="mb-2"
          flat
        >
          <v-toolbar-title>Itens mais vendidos:</v-toolbar-title>
        </v-toolbar>
      
    <v-simple-table>
      <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nome
          </th>
          <th class="text-left">
            Total de Vendas
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.totalvendas }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
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

