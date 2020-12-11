<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="5"
    class="elevation-1"
  >
        <template slot=”items” slot-scope="props">
          <td class="text-xs-left">{{ props.item.id }}</td>
          <td class="text-xs-center">{{ props.item.name }}</td>
          <td class="text-xs-center">{{ props.item.valor }}</td>
          <td class="text-xs-center">{{ props.item.itens }}</td>
        </template>
  </v-data-table>
</template>

<script>
  export default {
    name: "Table",
    props: ['pedidos'],
    data () {
      return {
        headers: [
          {
            text: 'Pedido',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Nome do Cliente', value: 'name' },
          { text: 'Valor (R$)', value: 'valor' },
          { text: 'Itens do pedido', value: 'itens' },
        ],
        desserts: this.pedidos
      }
    }
  }
</script>