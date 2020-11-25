<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-text class="pt-0">
          <v-form autocomplete="off">
            <v-row>
              <v-col cols="12" sm="5">
                <v-text-field
                  v-model.trim="usuario.nome"
                  label="Nome completo"
                  type="text"
                  autocomplete="off"
                  outlined
                  hide-details
                />
              </v-col>
              
              <v-col cols="12" sm="12" md="4">
                <v-text-field
                  v-model.trim="usuario.cpf"
                  label="Cpf"
                  type="text"
                  autocomplete="off"
                  outlined
                  hide-details
                />
              </v-col>
              <v-col cols="12" sm="12" md="4">
                <v-text-field
                  v-model.trim="usuario.email"
                  label="Email"
                  inputmode="email"
                  type="text"
                  autocomplete="off"
                  outlined
                  hide-details
                />
              </v-col>
              <v-col cols="12" sm="12" md="4">
                <v-text-field
                  v-model.trim="usuario.usuario"
                  label="Usuário"
                  type="text"
                  autocomplete="off"
                  outlined
                  hide-details
                  @input="sanitizeString()"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-row>
            <v-col cols="12" sm="12" md="4">
              <v-btn
                tile
                block
                color="green"
                dark
                @click.stop="cadastrarUsuario()"
              >
                <v-icon left>mdi-content-save</v-icon>Cadastrar
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

 

<script>
import { cpf } from "cpf-cnpj-validator";

export default {
  name: "Cadastroform",

  data: () => ({
    usuario: {
      nome: "",
      cpf: "",
    },
  }),
  mounted() {
    //cpf.isValid(this.usuario.cpf);
    console.log(cpf.isValid(this.usuario.cpf));
  },
  computed: {
    checaCPF() {
      return cpf.isValid(this.usuario.cpf);
    },
  },
};
</script>

<style>
</style>