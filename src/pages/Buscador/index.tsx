import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { Layout, Search } from "../../components"
import { GridMovies } from "../../components/commons/GridMovies";
import { getSearchMovie } from "../../services/movies";
import { FormsFields } from "../../types";

const Buscador  = () => {

    const [movies, setMovies] = useState([]);
    const [params, setParams] = useState({query: ''})
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() =>{
        setSearchParams(params)
    }, [params])

    useEffect (() => {
        const query = searchParams.get("query")

    getSearchMovie(query).then((data) =>{
    setMovies(data.results)
    })
       
}, [searchParams])

    const busqueda = (param: FormsFields) =>{
        setParams((prevState) => ({...prevState, query: param.query})

        )
    }

    return(
        <Layout>
            <Search onSearch={busqueda} />
            <GridMovies items={movies} />
        </Layout>
    )

};

export { Buscador }