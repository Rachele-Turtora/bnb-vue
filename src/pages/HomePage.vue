<script>

import { store } from '../store';
import axios from "axios";
import CardsComponent from '../components/CardsComponent.vue';


export default {
   nome: 'Home',
   props: {

   },
   data() {
      return {
         store
      }
   },
   components: {
      CardsComponent,
   },
   methods: {
      getApartments() {
         this.store.search = "";

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
         <div class="d-flex flex-wrap">
            <div class="col-lg-3 col-md-4 col-sm-6 col-8" v-for="apartment in store.api.apartments" :key="apartment.id">
      
               <CardsComponent :apartment="apartment"/>
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