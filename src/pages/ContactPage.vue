<script>

import { store } from '../store';

import GoogleMap from '../components/GoogleMapFrame.vue';



export default {
   nome: 'Contact',
   props: {

   },
   data() {
      return {
         store,

      }
   },
   components: {
      GoogleMap,
   }
}

</script>



<template>
   <h1 class="ta-center mt-20"> SONO CONTATTI</h1>
</template>



<style lang="scss" scoped></style>