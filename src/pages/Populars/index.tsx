import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { GridMovies } from "../../components/commons/GridMovies";
import { getAllPopular } from "../../services/movies";


const Populars  = () => {

    const [popular, setPopular] = useState([]);

useEffect(() => {

        
    getAllPopular().then(response => {
    setPopular(response.results)})
    
}, []);

console.log(popular);

    return(
        <Layout>
            <GridMovies items={popular} text={"Populars Movies"} />
        </Layout>
    )
    
    }
    
    export { Populars }