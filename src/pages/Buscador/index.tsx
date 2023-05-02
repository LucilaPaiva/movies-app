import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { Layout, Search } from "../../components"
import { GridMovies } from "../../components/commons/GridMovies";
import { getSearchMovie } from "../../services/movies";
import { FormsFields } from "../../types";
import { withAuth } from "../../hoc";
import { PaginationAll } from "../../components/commons/Pagination";



const BuscadorPage  = () => {

    const [movies, setMovies] = useState([]);
    const [params, setParams] = useState({ query: "", page: "1" })
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState("1");
    const [totalPages, setTotalPages] = useState("");
    
    

    useEffect(() =>{
        setSearchParams(params)
    }, [params])

    useEffect (() => {
        const query = searchParams.get("query");
        const page = searchParams.get("page");

    getSearchMovie(query, page).then((response) =>{
    setMovies(response.results);
    setTotalPages(response.total_pages);
    setPage(response.page);

    })

}, [searchParams]);

    const busqueda = (param: FormsFields) =>{
        setParams((prevState) => ({...prevState, query: param.query}));
    };

    const busquedaPage = (page: string) => {
        setParams((prevState) => ({ ...prevState, page: page }));
    };
    

    return(
        <Layout>
            <Search onSearch={busqueda} />
            <GridMovies items={movies} />
            <PaginationAll onClick={busquedaPage} page={page} totalPages={totalPages} />
    </Layout>
    )

};

export const Buscador = withAuth(BuscadorPage);