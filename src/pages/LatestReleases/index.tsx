import { useEffect, useState } from "react";
import { Layout } from "../../components"
import { GridMovies } from "../../components/commons/GridMovies";
import { getAllLatestReleases, getAllMovieUpcoming } from "../../services/movies";
    

    
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

    // const MovieUpcoming  = () => {

    //     const [movieUpcoming, setMovieUpcoming] = useState([]);
    
    // useEffect(() => {
            
    //     getAllMovieUpcoming().then(response => {
    //     setMovieUpcoming(response.results)})
        
    // }, []);

    // console.log(MovieUpcoming)
    
    //     return(
    //         <Layout>
    //             <GridMovies items={MovieUpcoming} text={"Movie Upcoming"} />
    //         </Layout>
    //     )
        
    // }
        
    // export { MovieUpcoming }