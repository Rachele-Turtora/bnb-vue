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
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand logo" href="#"
          ><img src="../../public/boolbnb.svg" alt=""
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
// import
@use "../assets/scss/partials/variables" as *;

header {
  font-size: 20px;
  position: sticky;
  top: 0;

  #app {
    height: 150px;
  }
  .logo {
    width: 150px;
  }

  ul {
    padding: 0;
    margin: 10px;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  svg {
    margin-left: -10px;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2));
    transition: 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }

  a {
    color: $tertiary;

    &:hover {
      color: $primary;

      font-weight: 600;
    }
  }
}
</style>
