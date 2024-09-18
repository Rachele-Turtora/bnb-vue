<script>
import { store } from "../store";
export default {
  name: "FilterComponent",

  data() {
    return {
      store,
      filters: {
        service1: false,
        service2: false,
        service3: false, //piscina id 3
        service4: false, //portineria id 4
        service5: false, //sauna id 5
        service6: false, //vistamare id 6
        numrooms: 0,
        numtoilets: 0,
        numbeds: 0,
        rangeDistance: 10, 
      },
      filterResultApartments: [],
    };
  },
  methods: {
    filterResult() {
      this.filterResultApartments = store.api.filteredApartments;

      this.filterResultApartments = this.filterResultApartments.filter((apartment) =>
        apartment.distance <= this.filters.rangeDistance
      );
      if (
        this.filters.service1 ||
        this.filters.service2 ||
        this.filters.service3 ||
        this.filters.service4 ||
        this.filters.service5 ||
        this.filters.service6
      ) {
        if (this.filters.service1) {
          console.log("filtro wifi attivo");
          this.filterResultApartments = this.filterResultApartments.filter(
            (appartment) => {
              return appartment.services.some(
                (service) => (service.pivot.service_id === 1)
              );
            }
          );
        }
        if (this.filters.service2) {
          console.log("filtro auto attivo");

          this.filterResultApartments = this.filterResultApartments.filter(
            (appartment) => {
              return appartment.services.some(
                (service) => (service.pivot.service_id === 2)
              );
            }
          );
        }
        if (this.filters.service3) {
          console.log("filtro piscina attivo");

          this.filterResultApartments = this.filterResultApartments.filter(
            (appartment) => {
              return appartment.services.some(
                (service) => (service.pivot.service_id === 3)
              );
            }
          );
        }
        if (this.filters.service4) {
          console.log("filtro porta attivo");

          this.filterResultApartments = this.filterResultApartments.filter(
            (appartment) => {
              return appartment.services.some(
                (service) => (service.pivot.service_id === 4)
              );
            }
          );
        }
        if (this.filters.service5) {
          console.log("filtro sauna attivo");

          this.filterResultApartments = this.filterResultApartments.filter(
            (appartment) => {
              return appartment.services.some(
                (service) => (service.pivot.service_id === 5)
              );
            }
          );
        }
        if (this.filters.service6) {
          console.log("filtro vista mare attivo");

          this.filterResultApartments = this.filterResultApartments.filter(
            (appartment) => {
              return appartment.services.some(
                (service) => (service.pivot.service_id === 6)
              );
            }
          );
        }
      }

      if (this.filters.numrooms > 0) {
        console.log("filtro camere attivo");

        this.filterResultApartments = this.filterResultApartments.filter(
          (appartment) => (appartment.rooms === this.filters.numrooms)
        );
      }

      if (this.filters.numbeds > 0) {
        console.log("filtro letti attivo");

        this.filterResultApartments = this.filterResultApartments.filter(
          (appartment) => (appartment.beds === this.filters.numbeds)
        );
      }

      if (this.filters.numtoilets > 0) {
        console.log("filtro bagni attivo");

        this.filterResultApartments = this.filterResultApartments.filter(
          (appartment) => (appartment.bathrooms === this.filters.numtoilets)
        );
      }

      console.log(this.filterResultApartments);
    },
  },
};
</script>
<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-success"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    <span>
      <font-awesome-icon :icon="['fas', 'bars-staggered']" class="fs-4" />
    </span>
    <p class="ms-3 mb-0 fs-6">Filtri</p>
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Filtra la ricerca
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit.prevent="filterResult">
          <div class="modal-body">
            <label for="customRange3" class="form-label"
              >Cerca nel raggio di:</label
            >
            <input
              type="range"
              class="form-range"
              min="10"
              max="80"
              step="10"
              id="range-distance"
              v-model="filters.rangeDistance"
            />

            <div
              class="service-section my-4 d-flex justify-content-evenly flex-wrap"
            >
              <input
                type="checkbox"
                class="btn-check"
                id="service-1"
                v-model="this.filters.service1"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="service-1"
                >Wi-fi</label
              ><br />
              <input
                type="checkbox"
                class="btn-check"
                id="service-2"
                v-model="this.filters.service2"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="service-2"
                >Posto auto</label
              ><br />
              <input
                type="checkbox"
                class="btn-check"
                id="service-3"
                v-model="this.filters.service3"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="service-3"
                >Piscina </label
              ><br />
              <input
                type="checkbox"
                class="btn-check"
                id="service-4"
                v-model="this.filters.service4"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="service-4"
                >Portineria</label
              ><br />
              <input
                type="checkbox"
                class="btn-check"
                id="service-5"
                v-model="this.filters.service5"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="service-5"
                >Sauna</label
              ><br />
              <input
                type="checkbox"
                class="btn-check"
                id="service-6"
                v-model="this.filters.service6"
                autocomplete="off"
              />
              <label class="btn btn-outline-primary" for="service-6"
                >Vista mare</label
              ><br />
            </div>

            <div class="room-section">
              <div class="row my-2">
                <h4 class="w-50">Numero di camere</h4>
                <input
                  class="input-filter w-25"
                  type="number"
                  name="rooms"
                  id="rooms-numb"
                  v-model="this.filters.numrooms"
                />
              </div>
              <div class="row my-2">
                <h4 class="w-50">Numero di letti</h4>
                <input
                  class="input-filter w-25"
                  type="number"
                  name="beds"
                  id="beds-numb"
                  v-model="this.filters.numbeds"
                />
              </div>
              <div class="row my-2">
                <h4 class="w-50">Numero di bagni</h4>
                <input
                  class="input-filter w-25"
                  type="number"
                  name="toilet"
                  id="toilet-numb"
                  v-model="this.filters.numtoilets"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
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
