
<script>

import { store } from '../store';
import axios from 'axios';

export default {
    name: 'MessageComponent',
    props: {
        apartmentSlug: {type: String},
    },
    data() {
        return {
            store,
            form: {
                name: '',
                email: '',
                content: '',
            },
            messageSuccess: '',

        }
    },
    methods: {
        sendMessage() {
      const messageData = {
        name: this.form.name,
        email: this.form.email,
        content: this.form.content,
      };

      axios
        .post(`${this.store.api.baseUrl}homes/${this.apartmentSlug}/message`, messageData)
        .then((response) => {
          if (response.status === 201) {
            // Mostra il messaggio di successo:
            this.messageSuccess = response.data.message;
            //? pulisci  messaggi di errore:
            this.messageError = ''; 
            // resetta il form:
            this.form.name = '';
            this.form.email = '';
            this.form.content = '';
          }
        })
        .catch((error) => {
          if (error.response.status === 422) {
            // errori di validazione:
            this.messageError = 'Ci sono errori nei dati inseriti. Verifica e riprova.';
            this.messageSuccess = '';
          } else {
            // gestione errori:
            this.messageError = 'Si è verificato un errore. Riprova più tardi.';
            this.messageSuccess = '';
          }
        });
    },


  },

}

</script>

<template>
    <div class="message-component">
        <div class="container">
            <div class="form-message">
                <form @submit.prevent="sendMessage">
                    <div>
                        <label for="name">Nome:</label>
                        <input type="text" v-model="form.name" id="name" required />
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="email" v-model="form.email" id="email" required />
                    </div>
                    <div>
                        <label for="message">Messaggio:</label>
                        <textarea v-model="form.content" id="message" required></textarea>
                    </div>
                    <button type="submit">Invia Messaggio</button>
                 </form>
            </div>
            <div class="info-message">
                <!-- Mostra il messaggio di successo o errore -->
                <div v-if="messageSuccess" class="success">
                {{ messageSuccess }}
                </div>
                <div v-if="messageError" class="error">
                {{ messageError }}
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/extende' as *;


.message-component {



}

</style>