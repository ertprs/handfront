<template>
  <v-row>
    <v-col cols="3">
      <v-card>
        <v-card-text class="pt-2">
          <v-form autocomplete="off">
            <v-row justify="center">
              
              <v-col cols="12" sm="12" md="9">
                <v-text-field
                  v-model.trim="usuario.cpf"
                  label="Cpf"
                  type="text"
                  autocomplete="off"
                  outlined
                  hide-details
                />
              <span v-if="checaCPF === false">CPF inválido</span>
              </v-col>
              <v-col cols="12" sm="12" md="9">
                <v-text-field
                  v-model.trim="usuario.senha"
                  label="Senha"
                  inputmode="senha"
                  type="password"
                  autocomplete="off"
                  outlined
                  hide-details
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-row justify="center">
            <v-col cols="12" sm="5">
             <v-btn
                color="primary"
                elevation="2"
                medium
              >Cadastrar</v-btn>
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
  name: "Loginform",

  data: () => ({
    usuario: {
      nome: "",
      email: "",
      datanasc: "",
      cpf: "",
    },
  }),
  mounted() {
    //cpf.isValid(this.usuario.cpf);
    // console.log(cpf.isValid(this.usuario.cpf));
  },
  computed: {
    checaCPF() {
      return cpf.isValid(this.usuario.cpf);
    },
  },

  methods: {
    cadastrarUsuario(){
      if (this.checaCPF === false) {
        this.usuario.cpf = "";
        return alert('CPf inválido')

      }
    }
  },
};
</script>

<style>
</style>