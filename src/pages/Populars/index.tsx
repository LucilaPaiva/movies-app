import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { GridMovies } from "../../components/commons/GridMovies";
import { getAllPopular } from "../../services/movies";
import { withAuth } from "../../hoc";


const PopularsMoviesPage  = () => {

    const [movies, setMovies] = useState([]);

useEffect(() => {

        
    getAllPopular().then(response => {
    setMovies(response.results)})
    
}, []);


    return(
        <Layout>
            <GridMovies items={movies} text={"Popular Movies"} />
        </Layout>
    )
    
}
    
export const Populars = withAuth(PopularsMoviesPage);