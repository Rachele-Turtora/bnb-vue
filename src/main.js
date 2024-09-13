//? iport istanza vue:
import { createApp } from 'vue';

//? import router:
import { router } from "./router";

//? import App Vue:
import App from './App.vue';

//? import style scss:
import './assets/scss/main.scss';

//? import bootstrap:
import * as bootstrap from 'bootstrap';

//? import typography:
import '@fontsource/ubuntu-condensed';

//? import font-awesome:
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons';
import { faPersonShelter } from '@fortawesome/free-solid-svg-icons';
import { faTemperatureArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faWater } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

library.add(
    faSearch,
    faUser,
    faWifi,
    faCarSide,
    faPersonSwimming,
    faPersonShelter,
    faTemperatureArrowUp,
    faWater,
    faBars,
    faXmark
)
//? append createApp in #app:
createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .mount('#app');
