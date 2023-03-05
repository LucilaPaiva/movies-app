import axios from 'axios'

const api = axios.create({
    baseURL: 'https://movies-app-5769d-default-rtdb.firebaseio.com/',

})

const apiMovie = axios.create({

    baseURL: 'https://api.themoviedb.org/3/',

    params:{
        apikey: 'dab579f482d50d7227a883b2c07af67b',
    }
})


export { api, apiMovie }