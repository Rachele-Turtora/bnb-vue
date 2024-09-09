<script>

import { store } from '../store';



export default {
   nome: 'Home',
   props: {

   },
   data() {
      return {
         store,

      }
   },
   components: {

   }
}

</script>



<template>
   <h1 class="ta-center mt-20"> {{ store.text }}</h1>
</template>



<style lang="scss" scoped></style>