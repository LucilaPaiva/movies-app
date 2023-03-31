import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { GridMovies } from "../../components/commons/GridMovies";
import { getAllPopular } from "../../services/movies";


const Populars  = () => {

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
    
    export { Populars }