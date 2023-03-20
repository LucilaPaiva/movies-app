import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { Layout, Search } from "../../components"
import { getSearchMovie } from "../../services/movies";

const Buscador  = () => {

    const [movies, setMovies] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

useEffect (() => {
    getSearchMovie({query:searchParams.get('query' || "" || null), });

}, [searchParams])

//const setSearchQuery = (params: FormFields) => {
// setSearchParams(params)
//}

    return(
        <Layout>
            <Search onSearch={(params) =>{console.log(params)}}/>
            
        </Layout>
         
    )
    

};

export { Buscador }