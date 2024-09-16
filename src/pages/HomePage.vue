<script>

import { store } from '../store';
import axios from "axios";


export default {
   nome: 'Home',
   props: {

   },
   data() {
      return {
         store
      }
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
   <div class="container mt-4">
      <div class="row">

         <div class="col-lg-3 col-md-4 col-sm-6" v-for="apartment in store.api.filteredApartments" :key="apartment.id">
            <div class="m-2">
               <div class="img-container">
                  <img :src="apartment.image.startsWith('http') ? apartment.image : apartment.image_frontend"
                     :alt="apartment.title" class="img-responsive rounded">
               </div>
               <h4 class="mt-2">{{ apartment.title }}</h4>
               <p class="text-secondary">Host: {{ apartment.user?.name }}</p>
            </div>
         </div>

         <div v-if="!store.api.filteredApartments.length" class="d-flex flex-wrap">
            <div class="col-lg-3 col-md-4 col-sm-6 col-8" v-for="apartment in store.api.apartments" :key="apartment.id">
               <div class="m-2">
                  <div class="img-container">
                     <img :src="apartment.image.startsWith('http') ? apartment.image : apartment.image_frontend"
                        :alt="apartment.title" class="img-responsive rounded">
                  </div>
                  <h4 class="mt-2">{{ apartment.title }}</h4>
                  <p class="text-secondary">Host: {{ apartment.user?.name }}</p>
               </div>
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

   &:hover {
      transform: scale(1.01);
      transition: .3s;
      cursor: pointer;
   }
}



</style>