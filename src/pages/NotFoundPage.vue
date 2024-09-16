  <script>
  export default {
    name: 'NotFoundPage'
  };
  </script>


<template>
    <div>
      <h1>Appartamento non trovato</h1>
      <p>Non siamo riusciti a trovare l'appartamento che stai cercando.</p>
      <router-link :to="{name: 'details',params: { slug: apartment.slug } }" class="mr-15 link"></router-link>
    </div>
  </template>
  
  
  <style scoped>

  </style>