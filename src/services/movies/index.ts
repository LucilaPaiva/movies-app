import { endpoints } from "../../constants";
import { apiMovies } from "../../utils/axios";


const getBanner = async () => {

    const response = await apiMovies.get(endpoints.MOVIE_UPCOMING);
    return response.data.results;
};

const getPopular = async (params: { page?: string }) => {
    const response = await apiMovies.get(endpoints.MOVIE_POPULAR, {params});
    return response.data;
  };


const getAllLatestReleases = async () => {
  const response = await apiMovies.get(endpoints. MOVIE_LATEST);
  return response.data;
};

const getTopRated = async (params: { page?: string }) => {
  const response = await apiMovies.get(endpoints.MOVIE_TOP_RATED,{params});
  return response.data;
};

const getSearchMovie = async (query: string | null, page:string | null = "1") => {
  const response = await apiMovies.get(endpoints.SEARCH_MOVIE, {params:
    {query: query, page: page},});
  return response.data;
};

const getAllMovieUpcoming = async () => {
  const response = await apiMovies.get(endpoints.MOVIE_UPCOMING);
  return response.data;
};

const getById = async (id: string, params?: {
  append_to_response?: string | null;
}) => {
  const response = await apiMovies.get(`/movie/${id}`, {params,});
  return response.data;
};


  // MOVIE_POPULAR: '/movie/popular', //populares.
  // MOVIE_LATEST: '/movie/latest', //últimos lanzamientos/latest releases.
  // MOVIE_UPCOMING: '/movie/upcoming', // Proximamente.
  // MOVIE_TOP_RATED: '/movie/top_rated', //top rated// better movies
  // SEARCH_MOVIE: '/search/movie',



export { getPopular, getBanner, getAllLatestReleases, getTopRated, getSearchMovie, getAllMovieUpcoming, getById };
