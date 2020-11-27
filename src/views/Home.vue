<template>
  <div class="home">
    <img src="./logo.svg" alt="">

     <form @submit="checkForm" class="formulario" action="/dashboard">
    <h1>Login</h1>
    <input type="text" v-model="login" name="login">
    <h1>Senha</h1>
    <input type="password" v-model="password" name="password">
    <button type="submit" class="login">ENTRAR</button>

    <p v-if="error">
      <b>Usuário inválido.</b>
  </p>
  </form>
    
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
img {
  width: 20vw;
  height: 40vh;
  position: absolute;
  right: 40%;
  top: 0%;
}

div .formulario {
  left:45%;
  top: 45%;
  margin-left:-100px;  
  position:absolute;
  width:200px;
  height:100px; 
}
h1 {
  font-size: 1.3rem;
  color: #FC4954;
  display: flex;
  align-items: center;
  letter-spacing: 0.015em;
  margin-bottom: 10px;

} 

input {
  background: #FFFFFF;
  border: 1px solid #DCDCE5;
  border-radius: 10px;
  padding: 12px 20px;
  margin: 0;
  width: 346px;
  height: 48px;
}
.login {
  background-color: #EB5757;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: none;
  color: white;
  text-align: center;
  font-family: DM Sans;
  font-size: 1.3rem;
  font-weight: bold;
  display: inline-block;
  position: relative;
  top: 10%;
  left: 30%;
  width: 229px;
  height: 45px;
}
</style>