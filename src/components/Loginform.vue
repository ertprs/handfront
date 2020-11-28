<template>
  <form class="formulario">
    <h1>Login</h1>
    <input type="text" v-model="login" name="login" @keypress.enter="realizarLogin()"/>
    <span v-if="error"><b>Usuário ou senha inválidos.</b></span>
    <h1>Senha</h1>
    <input type="password" v-model="password" name="password" @keypress.enter="realizarLogin()"/>
    <button type="button" class="login" @click.stop.prevent="realizarLogin()">
      ENTRAR
    </button>
  </form>
</template>

<script>
export default {
  name: "Formulario",

  data: () => ({
    login: null,
    password: null,
    error: false,
  }),

  methods: {
    realizarLogin() {
      if (this.login !== "admin" || this.password !== "admin") {
        return (this.error = true);
      }

      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped>
div .formulario {
  left: 45%;
  top: 45%;
  margin-left: -100px;
  position: absolute;
  width: 200px;
  height: 100px;
}
h1 {
  font-size: 1.3rem;
  color: #fc4954;
  display: flex;
  align-items: center;
  letter-spacing: 0.015em;
  margin-bottom: 10px;
}
input + h1 {
  margin-top: 30px;
}
input {
  background: #ffffff;
  border: 1px solid #dcdce5;
  border-radius: 10px;
  padding: 12px 20px;
  margin: 0;
  width: 346px;
  height: 48px;
}
.login {
  background-color: #eb5757;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: none;
  color: white;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  display: inline-block;
  position: relative;
  top: 20%;
  left: 30%;
  width: 229px;
  height: 45px;
}
</style>