
<template>
  <div>
    <v-tabs color="primary" centered>
      <v-tab>Concluidos</v-tab>
      <v-tab>Pendentes</v-tab>
      <v-tab>Cancelados</v-tab>

      <v-tab-item v-for="n in 3" :key="n">
        <v-container fluid>
          <v-row>
            <v-col v-for="i in 6" :key="i" cols="12" md="4">
              
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

