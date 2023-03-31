import { useEffect, useState } from "react";
import { Layout } from "../../components"
import { GridMovies } from "../../components/commons/GridMovies";
import { getAllLatestReleases } from "../../services/movies";
    

    
    const LatestReleases  = () => {

        const [movies, setMovies] = useState([]);
    
    useEffect(() => {
            
        getAllLatestReleases().then(response => {
        setMovies(response.results)})
        
    }, []);
    
        return(
            <Layout>
                <GridMovies items={movies} text={"Latest Releases"} />
            </Layout>
        )
        
    }
        
    export { LatestReleases }
