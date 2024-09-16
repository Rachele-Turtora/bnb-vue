<script>
import axios from 'axios';
import { store } from '../store';
    export default {
        name: 'DetailPage',
        data() {
            return {
                slug: [],
                apartament: [],
                store,
            }
        },
        methods: {
            getApiDetail(){
                axios
                .get(`${this.store.api.baseUrl}homes/${this.$route.params.slug}`)
                .then((response) => {
                    console.log(response);
                    
                    if (response.data.status) {
                        this.apartament = response.data.results;
                                               
                    } else {
                        this.$route.push({name: 'not-found'});
                    }
                    
                })
            }

        },
        mounted() {
            this.getApiDetail();
            
        }
    }
</script>


<template>
    <div>
        <h1>sono la show {{ apartament.image }}</h1>
    </div>
</template>


<style lang="scss" scoped>

</style>


