<script>
// import:
import { store } from "../store";

export default {
  nome: "Header",
  data() {
    return {
      store,
      search : 'frsgsr',
      suggerimenti: [],
      eventualirisultati : [
    'esempio1',
    'esempio2',
    'esempio3',
    'esempio4',
    'esempio5',
    'esempio6',
    'tdhdthd',
    'hdthtd',
    'abta',
    'abttba',
    'abaeba',
    'atbbatt',
    'ytehe',
],
    };
  },
  methods: {
    inputUntente() {
      let result = [];
    
    if (this.search.length) {
        result = this.eventualirisultati.filter((keyword)=>{
          return keyword.toLowerCase().includes(this.search.toLowerCase());
        });
        console.log(result);
        console.log(this.search);
        this.suggerimenti= result
    }
    this.display(result);
    },
    
    selectInput(index) {
     this.search = this.suggerimenti[index];
     this.suggerimenti = [];
}
  }
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
    <div class="search-box">
        <div class="row">
            <input type="text" id="input-box" placeholder="scrivi l'inidizzo" autocomplete="off" @keyup="inputUntente" v-model="search">
            <button>cerca</button>
        </div>
        <div class="result-box">
            <ul>
              <li v-for="(suggerimento, index) in suggerimenti" @click="selectInput(index)">{{ suggerimento }}</li>
            </ul>
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

.search-box {
width: 600px;
background-color: aliceblue;
margin: 200px auto 0;
}
.result-box ul {
    border-top: 1px solid;
    padding: 15px 10px;
 }
 .row {
   display: flex;
   align-items: center;
   padding: 10px 20px;
 }
 input {
   flex: 1;
   height: 50px;
   background: transparent;
   border: 0;
   outline: 0;
   font: 18px;

 }
 .result-box ul li {
    list-style-type: none;
    border-radius: 3px;
    padding: 15px 10px;
    cursor: pointer;
 }
 .result-box ul li:hover {
    background-color: aqua;
 }
.row button {
   background-color: transparent;
   border: 0;
   outline: 0;
}
 
</style>
