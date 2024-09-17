<script>
import axios from 'axios';
import { store } from '../store';
import MapComponent from '../components/MapComponent.vue';
export default {
    name: 'DetailPage',
    data() {
        return {
            slug: [],
            apartment: [],
            services: {
                "WiFi": "wifi",
                "Posto macchina": "car",
                "Piscina": "person-swimming",
                "Portineria": "person-shelter",
                "Sauna": "temperature-arrow-up",
                "Vista Mare": "water",
                "TV": "tv",
                "Ascensore": "elevator",
                "Aria condizionata": "fan",
                "Kit medico": "kit-medical"
            },
            store,
        }
    },
    components: {
        MapComponent
    },
    methods: {
        getApiDetail() {
            axios
                .get(`${this.store.api.baseUrl}homes/${this.$route.params.slug}`)
                .then((response) => {

                    if (response.data.status) {
                        this.apartment = response.data.results;

                    } else {
                        this.$route.push({ name: 'not-found' });
                    }

                })
        }

    },
    mounted() {
        this.getApiDetail();

    },
    computed: {
        goBack() {
            this.$router.push({ name: 'home' });
        }
    }
}
</script>


<template>
    <div class="detail">
        <div class="item my-5">
            <div class="button mb-5">
                <button @click="goBack">Torna Indietro</button>
            </div>
            <div class="item_card" @click="openShow">
                <div class="card_detail row">
                    <h2 class="mb-5">{{ apartment.title }}</h2>
                    <div class="card_image col-12 col-md-5 align-content-center">
                        <img :src="apartment.image && apartment.image.startsWith('http') ? apartment.image : apartment.image_frontend"
                            :alt="apartment.title" />
                    </div>
                    <div class="card_info col-12 col-md-7 mt-5 ps-5">
                        <p class="mt-4"><span>Indirizzo: </span> {{ apartment.address }}</p>
                        <p class="mt-4"><span>Camere: </span> {{ apartment.rooms }}</p>
                        <p class="mt-4"><span>Letti: </span> {{ apartment.beds }}</p>
                        <p class="mt-4"><span>Bagni: </span> {{ apartment.bathrooms }}</p>
                    </div>
                </div>
                <div class="card_desscription my-5">
                    <p v-if="apartment.description"><span>Descrizione: </span> {{ apartment.description }} </p>
                </div>

                <div v-if="apartment.services?.length" class="services">
                    <h3>Cosa troverai:</h3>
                    <ul>
                        <li v-for="service in apartment.services" class="d-flex mt-3" :key="service.name">
                            <!-- Usa direttamente l'icona -->
                            <font-awesome-icon v-if="services[service.name]" :icon="['fas', services[service.name]]"
                                class="me-3 fs-5" />
                            <p>{{ service.name }}</p>
                        </li>
                    </ul>
                </div>
                <div class="map mt-3">
                    <MapComponent class="mt-5" :apartment="apartment" />
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/extende' as *;

.detail {
    align-content: center;

    .item {
        width: 90%;
        margin: auto;

        .button {
            text-align: end;

            button {
                padding: 10px 15px;
                background: $gradient;
                border-radius: 10px;
                border: none;
                color: $text2;
                @extend %shadow;

                &:hover {
                    opacity: .85;
                    @extend %shadow2;
                }
            }
        }

        .item_card {
            padding: 45px;
            background-color: $text2;
            border-radius: 15px;
            overflow: scroll;
            @extend %shadow;
            cursor: pointer;

            span {
                color: $primary;
                font-weight: 600;


                .card_detail {
                    align-items: center;


                    .card_image {
                        height: 400px;
                        align-content: center;
                        object-fit: cover;

                        img {
                            height: 100%;
                        }
                    }

                    .card_info {}
                }

                .card_desscription {}
            }

        }
    }
}
</style>


