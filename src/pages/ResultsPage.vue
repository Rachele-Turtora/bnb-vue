<script>
import { store } from "../store";
import axios from "axios";
import CardsComponent from "../components/CardsComponent.vue";

import GoogleMap from "../components/GoogleMapFrame.vue";
import GoogleMapFrame from "../components/GoogleMapFrame.vue";
import FilterComponent from "../components/FilterComponent.vue";

export default {
  nome: "Results",
  props: {},
  data() {
    return {
      store,
    };
  },
  components: {
    GoogleMap,
    CardsComponent,
    FilterComponent,
  },

  computed: {
    apartmentsNum() {
      return this.store.api.filteredApartments.length;
    },
  },
};
</script>

<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mx-3">
      <p>
        <strong>{{ apartmentsNum }} alloggi in questa località</strong>
      </p>
      <div class="filters my-3 mx-2">
        <FilterComponent></FilterComponent>
      </div>
    </div>

    <div class="row">
      <div
        class="col-lg-3 col-md-4 col-sm-6"
        v-for="(apartment, index) in store.api.filteredApartments"
        :key="apartment.id"
      >
        <CardsComponent :apartment="apartment" />
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
    transition: 0.3s;
    cursor: pointer;
  }
}

.filters {
  width: 120px;
}
</style>
