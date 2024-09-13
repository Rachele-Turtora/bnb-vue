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
               <div class="img-container">
                  <img :src="apartment.image" alt="img" class="rounded">
               </div>
               <h4 class="mt-2">{{ apartment.title }}</h4>
               <p class="text-secondary">Host: {{ apartment.user?.name }}</p>
            </div>
         </div>
      </div>
   </div>
</template>



<style lang="scss" scoped>
img {
   height: 100%;
}

.img-container {
   height: 180px;
}
</style>