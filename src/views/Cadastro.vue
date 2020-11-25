<template>
    <div class="Cadastro">
        <Cadastroform />
        <Footer />
    </div>
</template>

<script>

import Cadastroform from "@/components/Cadastroform.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Cadastro",
  components: {
    Footer,
    Cadastroform
  },
};
</script>
