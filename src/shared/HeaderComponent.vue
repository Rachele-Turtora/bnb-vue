<script>
// import:
import { store } from '../store';


export default {
  nome: 'Header',
  data() {
    return {
      store,

    }
  },
}

</script>



<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div class="container">
        <!--? nav bar -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link :to="{ name: 'home' }" class="mr-15 link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'contact' }" class="link">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>



<style lang="scss" scoped>
// import
@use '../assets/scss/partials/variables' as *;

header {
  position: sticky;
  top: 0;

  #app {
    height: 100px;
  }

  ul {
    padding: 0;
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
    transition: .3s;

    &:hover {
      transform: scale(1.05);
    }
  }

  a {
    &:hover {
      font-weight: 600;
    }
  }
}
</style>