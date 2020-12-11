<template>
  <div>
    //Implementar as tabs de novo abaixo
    //Vão ter que implementar o axios, armazenando o resultado da requisição em um objeto e passando o <Table v-bind:pedidos="[objetoResultanteAqui]" />
  </div>
</template>

<script>
import Table from "@/components/Table/Table.vue";

export default {
  components: {
    Table,
  },
  data () {
    return {
       tabs: null,
      pedidos1: [
        {
          id: 0,
          name: "322332",
          valor: 3,
          itens: "323223"
        },
        {
          id: 1,
          name: "4243434",
          valor: 54554,
          itens: "433434"
        },
      ],
      pedidos2: [
        {
          id: 0,
          name: "322332",
          valor: 3,
          itens: "323223"
        },
        {
          id: 1,
          name: "4243434",
          valor: 54554,
          itens: "433434"
        },
      ]
    }
  }
};
</script>
