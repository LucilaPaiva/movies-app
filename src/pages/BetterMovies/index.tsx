import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { GridMovies } from "../../components/commons/GridMovies";
import { getAllTopRated } from "../../services/movies";
import { withAuth } from "../../hoc";


   

    const BetterMoviesPage  = () => {

        const [movies, setMovies] = useState([]);
    
    useEffect(() => {
            
        getAllTopRated().then(response => {
        setMovies(response.results)})
        
    }, []);
    
        return(
            <Layout>
                <GridMovies items={movies} text={"Better Movies"} />
            </Layout>
        )
        
    }
        
export const BetterMovies = withAuth(BetterMoviesPage);