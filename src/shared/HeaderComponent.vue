<script>
// import:
import { store } from "../store";

export default {
  nome: "Header",
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <header class="shadow">
    <div class="container-lg">
      <div class="row">
        <div class="col d-none d-lg-flex">
          <a
            class="navbar-brand d-flex justify-content-start align-items-start"
            href="#"
            ><img class="logo" src="../../public/boolbnb.svg" alt=""
          /></a>
        </div>
        <div class="col">
          <div class="justify-content-center d-none d-lg-flex">
            <ul class="nav-menu d-flex mx-auto">
              <li class="nav-item">
                <router-link :to="{ name: 'home' }" class="mr-15 link"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <router-link :to="{ name: 'contact' }" class="link"
                  >Contact</router-link
                >
              </li>
            </ul>
          </div>
          <div class="search-bar">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span class="input-group-text" id="basic-addon2">%</span>
            </div>
          </div>
        </div>
        <div class="col d-flex justify-content-end align-items-start m-2">
          <button class="btn-login">Accedi</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
// import
@use "../assets/scss/partials/variables" as *;

header {
  font-size: 20px;
  position: sticky;
  top: 0;
  background-color: whitesmoke;

  .logo {
    width: 150px;
  }

  ul {
    padding: 0;
    margin: 10px;
    li {
      list-style-type: none;
    }
  }

  a {
    color: $tertiary;
    text-decoration: none;

    &:hover {
      color: $primary;

      font-weight: 600;
    }
  }
  .btn-login {
    border: 1px solid $primary;
    color: $primary;
    padding: 5px 10px;
    border-radius: 20px;
    &:hover {
      background-color: $primary;
      color: white;
    }
  }
}
</style>
