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
         store,
         currentPage: 1,
         page: [],
      }
   },
   components: {
      CardsComponent,
   },
   methods: {
      getApartments() {
         this.store.search = "";

         const url = this.store.api.baseUrl + this.store.api.endpoints.apartmentsList;

         axios.get(url, {
            params: {
               page: this.currentPage,
            }
         })
            .then(response => {
               this.store.api.apartments = response.data.results.data;
               this.page = response.data.results;
               console.log(response.data);
               console.log(this.page.results);
               

            })
      },

      //? Navigazione pagina:
      prevPage() {
            this.currentPage--;
            this.getApartments();
            window.scrollTo(0, 0);
        },
        nextPage() {
            this.currentPage++;
            this.getApartments();
            window.scrollTo(0, 0);
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
         <!--? bottoni per la navigazione -->
         <div class="pagination">
               <button @click="prevPage" class="mr-25" v-if="page?.prev_page_url">
                  <i class="fas fa-chevron-left"><</i>
               </button>
               <button @click="nextPage" v-if="page?.next_page_url">
                  <i class="fas fa-chevron-right">></i>
               </button>
         </div>
      </div>
   </div>
</template>



<style lang="scss" scoped>

@use '../assets/scss/partials/extende' as *;

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
.pagination {
   justify-content: center;
   margin: 35px 0 50px;
   
   button {
      text-align: center;
      padding: 10px 35px;
      background: $gradient;
      color: $secondary;
      border-radius: 10px;
      border: none;
      @extend %shadow;
      &:hover {opacity: .85; @extend %shadow2;}
   }
}

</style>