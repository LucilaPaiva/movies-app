import axios from 'axios'

const api = axios.create({
    baseURL: 'https://movies-app-5769d-default-rtdb.firebaseio.com/',
    params: {
        api_key: "prueba-api-key",
        prueba: "prueba-2", 
        // Aca defino tantos query params que necesito que estén en todas las solicitudes (ejemplo token)  como necesite
    }
})

export { api }