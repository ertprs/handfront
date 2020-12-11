<template>
<div>
  <v-card
    class="mt-16 mx-auto"
    width="500px"
  > 
    <v-form>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="8" lg="22">
            <v-img
              width="200"
              height="200"
              class="centered"
              src="../../assets/logo.svg"
            ></v-img>
            <v-divider></v-divider>
            <v-text-field
              outlined
              v-model="email"
              :rules="[rules.required, rules.email]"
              label="E-mail"
            ></v-text-field>
            <v-text-field
              :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
              outlined
              :rules="[rules.required, rules.emailMatch]"
              :type="show4 ? 'text' : 'password'"
              name="input-10-2"
              label="Senha"
              hint="At least 8 characters"
              
              @click:append="show4 = !show4"
            ></v-text-field>

            <v-btn color="primary" elevation="2" class="mx-auto"> Entrar </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Preliminary report",
      email: "",
      rules: {
        required: (value) => !!value || "Obrigatório.",
        counter: (value) => value.length <= 20 || "Max 20 caracteres",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Email.";
        },
      },

        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Obrigatório.',
          min: v => v.length >= 8 || 'Min 8 caracteres',
          emailMatch: () => (`O email ou a senha estão errados.`),
        },
    };
  },
};
</script>

<style>

</style>