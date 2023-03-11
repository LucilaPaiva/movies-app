import axios from 'axios';

const api = axios.create({
    baseURL: 'https://movies-app-5769d-default-rtdb.firebaseio.com/',

});

const apiMovies = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "dab579f482d50d7227a883b2c07af67b",
    },
});



export { api, apiMovies }