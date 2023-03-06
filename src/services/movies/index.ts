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



export { getAllPopular, getBanner };
