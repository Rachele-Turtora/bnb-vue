// importo il metodo reactive:
import { reactive } from "vue";

export const store = reactive({
    text: 'Hello World!',

    api: {
        apartments: [],
        baseUrl: "http://127.0.0.1:8000/api/",
        endpoints: {
            apartmentsList: "homes",
        }
    }
})