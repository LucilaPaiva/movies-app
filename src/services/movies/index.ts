import { endpoints } from "../../constants";
import { apiMovies } from "../../utils/axios";


const getBanner = async () => {

    const response = await apiMovies.get(endpoints.MOVIE_UPCOMING);
    return response.data.results;
};

const getAllPopular = async () => {
    const response = await apiMovies.get(endpoints.MOVIE_POPULAR);
    return response.data;
  };

const getAllLatestReleases = async () => {
  const response = await apiMovies.get(endpoints. MOVIE_LATEST);
  return response.data;
};

const getAllTopRated = async () => {
  const response = await apiMovies.get(endpoints.MOVIE_TOP_RATED);
  return response.data;
};

const getSearchMovie = async () => {
  const response = await apiMovies.get(endpoints.SEARCH_MOVIE);
  return response.data;
};

const getAllMovieUpcoming = async () => {
  const response = await apiMovies.get(endpoints.MOVIE_UPCOMING);
  return response.data;
};



  // MOVIE_POPULAR: '/movie/popular', //populares.
  // MOVIE_LATEST: '/movie/latest', //últimos lanzamientos/latest releases.
  // MOVIE_UPCOMING: '/movie/upcoming', // Proximamente.
  // MOVIE_TOP_RATED: '/movie/top_rated', //top rated// better movies
  // SEARCH_MOVIE: '/search/movie',



export { getAllPopular, getBanner, getAllLatestReleases, getAllTopRated, getSearchMovie, getAllMovieUpcoming };
