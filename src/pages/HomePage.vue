<script>

import { store } from '../store';
import axios from "axios";


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

   },
   methods: {
      getApartments() {
         const url = this.store.api.baseUrl + this.store.api.endpoints.apartmentsList;

         axios.get(url)
            .then(response => {
               this.store.api.apartments = response.data.results.data;
            })
      }
   },
   created() {
      this.getApartments()
   }
}

</script>



<template>
   <div class="container">
      <div class="row">
         <div class="col-3" v-for="apartment in store.api.apartments">
            <div class="m-2">
               <img :src="apartment.image" alt="img">
               <h4>{{ apartment.title }}</h4>
               <p>{{ apartment.description }}</p>
            </div>
         </div>
      </div>
   </div>
</template>



<style lang="scss" scoped></style>