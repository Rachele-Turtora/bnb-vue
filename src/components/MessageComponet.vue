
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
            messageError: '',
            isModalVisible: false

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
    showModal() {

      if (this.isModalVisible === false) {
        this.isModalVisible = true;
      }
      else {
        
        this.isModalVisible = false;
      }


    },
    closeModal() {
      this.isModalVisible = false;
    }


  },

}

</script>

<template>
    
    <button @click="showModal" class="btn-gradient">Manda Un messaggio</button>

    
    <div v-show="isModalVisible" class="relative">
      <form action="#" @submit.prevent="sendMessage">
        <div id="form">
          <h1>Compila il form sottostante per inviarmi un messaggio</h1>
          <label for="name">Nome:</label>
          <input type="text" name="name" v-model="form.name" id="name" required/>
          
          <label for="email">Email:</label>
          <input type="text" name="email" v-model="form.email" id="email" required />
          
          <label for="message">Messaggio</label>
          <textarea name="message" v-model="form.content" id="message" required cols="30" rows="10"></textarea>
          
          <!-- <input type="submit" id="submit" name="submit" value="Invia" /> -->
          <button type="submit">Invia</button>
          
        </div>
      </form>
      <button class="btn-absolute" @click="closeModal">X</button>
    </div>
            <div class="info-message">
                
                <div v-if="messageSuccess" class="success">
                {{ messageSuccess }}
                </div>
                <div v-if="messageError" class="error">
                {{ messageError }}
                </div>
            </div>
</template>

<style lang="scss" scoped>

@use '../assets/scss/partials/extende' as *;



#form {
  font-size: 14px;
  max-width: 500px;
  margin: 50px auto;
  padding: 24px;
  overflow: hidden;
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
  border-radius: 20px;
  border: 1px solid black;
  @extend %shadow;
}
h1 {
 font-size: 16px;
 color: black;
 margin-bottom: 20px;
}

label, input, textarea { /* Stili comuni agli elementi del form */
color: black; /* Colore del testo */
float: left; /* Float a sinistra */
font-family: Verdana, sans-serif; /* Tipo di carattere per il testo */
margin: 10px 0; /* Margini */
}
label { /* Stili per la label */
display: block; /* Impostiamo la label come elemento blocco */
line-height: 30px; /* Altezza di riga */
width: 150px; /* Larghezza */
}
input, textarea { /* Stili per il campo di testo e per la textarea */
//  background: #1C1C1C; /* Colore di sfondo */
//  border: 1px solid $primary; /* Bordo */
 color: black; /* Colore del testo */
 height: 30px; /* Altezza */
 line-height: 30px; /* Altezza di riga */
 width: 300px; /* Larghezza */
 padding: 0 10px; /* Padding */
}
input { padding-left: 30px;}
textarea { /* Stili specifici per la teaxtarea */
 /* Sfondo con immagine */
 font-size: 12px;
 height: 200px;
 width: 300px;
 overflow: hidden; /* disabilitare la scrollbar in IE */
}
button {
  margin-top: 8px;
  margin-left: 20px;
  border: 1px solid black;
  background-color: transparent;
  padding: 4px 8px;
  color: $footer;

}
button:active {
  transform: scale(0.95);
}
.relative {
  position: relative;
  width: fit-content;
  margin: 0 auto;
}
.btn-absolute {
  position: absolute;
  top: 9px;
  font-weight: 600;
  font-size: 15px;
  right: 10px;
  color: red;
  border: none;
}
.btn-gradient {
  
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
</style>