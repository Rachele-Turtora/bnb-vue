<script>

import { store } from '../store';
import axios from 'axios';

import GoogleMap from '../components/GoogleMapFrame.vue';



export default {
   nome: 'Results',
   props: {

   },
   data() {
      return {
         store,

      }
   },
   components: {
      GoogleMap,
   },
   methods: {

   }
}

</script>



<template>
   <div class="container mt-4">
      <div class="filters border border-dark rounded p-3 d-flex align-items-center justify-content-center my-3 mx-2">
         <span>
            <font-awesome-icon :icon="['fas', 'bars-staggered']" class="fs-4" />
         </span>
         <p class="ms-3 mb-0 fs-6">Filtri</p>
      </div>
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

.filters {
   width: 120px;
}
</style>