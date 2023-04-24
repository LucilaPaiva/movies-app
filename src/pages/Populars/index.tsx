import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { GridMovies } from "../../components/commons/GridMovies";
import { getPopular } from "../../services/movies";
import { withAuth } from "../../hoc";
import { useSearchParams } from "react-router-dom";
import { PaginationAll } from "../../components/commons/Pagination";

const PopularsMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getPopular({ page: searchParams.get("page") || "1" }).then((response) => {
      setMovies(response.results);
      setPage(response.page);
      setTotalPages(response.total_pages);
    });
  }, [searchParams]);

  return (
    <Layout>
      <GridMovies items={movies} text={"Popular Movies"} />
      <PaginationAll page={page} totalPages={totalPages} />
    </Layout>
  );
};

export const Populars = withAuth(PopularsMoviesPage);
