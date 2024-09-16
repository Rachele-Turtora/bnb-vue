<script>
import { store } from '../store';
    export default {
        name: 'CardsComponent',
        props: {
        apartment: {type:Array},
    },

        data(){
            return {
                store,

            }
        },
        
        
    }
</script>


<template>
    <div>
        <div class="m-2">
               <div class="img-container">
                <router-link :to="{name: 'details',params: { slug: apartment.slug } }" class="mr-15 link">
                    <img :src="apartment.image.startsWith('http') ? apartment.image : apartment.image_frontend"
                       :alt="apartment.title" class="img-responsive rounded">
                </router-link>
               </div>
               <h4 class="mt-2">{{ apartment.title }}</h4>
               <p class="text-secondary">Host: {{ apartment.user?.name }}</p>
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