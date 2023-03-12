import { useEffect, useState } from "react";
import { Layout } from "../../components"
import { GridMovies } from "../../components/commons/GridMovies";
import { getAllMovieUpcoming } from "../../services/movies";
    

    
    const LatestReleases  = () => {

        const [movies, setMovies] = useState([]);
    
    useEffect(() => {
            
        getAllMovieUpcoming().then(response => {
        setMovies(response.results)})
        
    }, []);
    
        return(
            <Layout>
                <GridMovies items={movies} text={"Movie Upcoming"} />
            </Layout>
        )
        
    }
        
    export { LatestReleases }
