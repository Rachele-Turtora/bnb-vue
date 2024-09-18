<script>
import { store } from "../store";
import axios from 'axios';
export default {
  name: "FilterComponent",

  data() {
    return {
      store,
      services: [],
      selectedServices: [],
      filters: {
        numrooms: 0,
        numtoilets: 0,
        numbeds: 0,
        rangeDistance: 10,
      },
    };
  },
  methods: {
    getServices() {
      const url = this.store.api.baseUrl + 'services';

      axios.get(url).then(response => {
        this.services = response.data.results;
        console.log(this.services);
      })
    },
    filterResult() {
      this.store.api.filteredApartments = store.api.filteredApartments;

      if (this.selectedServices.length > 0) {
        console.log("Filtraggio per servizi attivi");

        this.store.api.filteredApartments = this.store.api.filteredApartments.filter(appartment =>
          this.selectedServices.every(serviceId =>
            appartment.services.some(service => service.pivot.service_id === serviceId)
          )
        );
      }

      if (this.filters.numrooms > 0) {
        console.log("filtro camere attivo");

        this.store.api.filteredApartments = this.store.api.filteredApartments.filter(
          (appartment) => (appartment.rooms === this.filters.numrooms)
        );
      }

      if (this.filters.numbeds > 0) {
        console.log("filtro letti attivo");

        this.store.api.filteredApartments = this.store.api.filteredApartments.filter(
          (appartment) => (appartment.beds === this.filters.numbeds)
        );
      }

      if (this.filters.numtoilets > 0) {
        console.log("filtro bagni attivo");

        this.store.api.filteredApartments = this.store.api.filteredApartments.filter(
          (appartment) => (appartment.bathrooms === this.filters.numtoilets)
        );
      }

      console.log(this.store.api.filteredApartments);
      this.$emit('filter-apartments', store.api.filteredApartments);
    },
  },
  created() {
    this.getServices();
  }
};
</script>
<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <span>
      <font-awesome-icon :icon="['fas', 'bars-staggered']" class="fs-4" />
    </span>
    <p class="ms-3 mb-0 fs-6">Filtri</p>
  </button>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Filtra la ricerca
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="filterResult">
          <div class="modal-body">
            <label for="customRange3" class="form-label">Cerca nel raggio di:</label>
            <input type="range" class="form-range" min="10" max="80" step="10" id="range-distance" />

            <div class="service-section my-4 d-flex justify-content-evenly flex-wrap">
              <div class="service" v-for="service in services" :key="service.id">
                <input type="checkbox" class="btn-check" :id="'service-' + service.id" v-model="this.selectedServices"
                  :value="service.id" autocomplete="off" />
                <label class="btn btn-outline-primary" :for="'service-' + service.id">
                  {{ service.name }}
                </label>
              </div>
            </div>

            <div class="room-section">
              <div class="row my-2">
                <h4 class="w-50">Numero di camere</h4>
                <input class="input-filter w-25" type="number" name="rooms" id="rooms-numb"
                  v-model="this.filters.numrooms" />
              </div>
              <div class="row my-2">
                <h4 class="w-50">Numero di letti</h4>
                <input class="input-filter w-25" type="number" name="beds" id="beds-numb"
                  v-model="this.filters.numbeds" />
              </div>
              <div class="row my-2">
                <h4 class="w-50">Numero di bagni</h4>
                <input class="input-filter w-25" type="number" name="toilet" id="toilet-numb"
                  v-model="this.filters.numtoilets" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn btn-success">Filtra</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="scss"></style>
