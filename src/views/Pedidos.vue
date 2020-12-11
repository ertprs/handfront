<template> 
      <Tab /> 
</template>
    
<script>

import Tab from "@/components/tab/Tab.vue";


export default {
  components: {
    Tab,
  },

  created () {
    document.title = this.$route.meta.titulo;
  }  
};

</script>

<style>
</style>