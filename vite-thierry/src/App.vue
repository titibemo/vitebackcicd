
<template>
  <h1>YEAH J'ai réussi - Thierry -
    Tu as un entretien à 13h30 sur zoom avec Boris !!!
  </h1>

  {{ a }}
</template>

<script setup>
import { ref } from 'vue'

const a = ref(null);

const user = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/user/listUser`, {
          method: 'get',

      })

      if (!response.ok) {

          console.log(error);

          return;
      }
      const result = await response.json();

      a.value = result;

    

      console.log(result, a.value);
        

    } catch (error) {
        console.error('Erreur lors du fetch showprofil :', error);
    }
}

user();

</script>


<style scoped>

</style>
