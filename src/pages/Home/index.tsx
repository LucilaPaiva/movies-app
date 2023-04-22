import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { getAllPopular, getBanner, getAllTopRated } from "../../services/movies";
import { Banner } from "../../components/commons/Banner";
import { withAuth } from "../../hoc";
import { Posters } from "../../components/commons";




const HomeMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {

    getBanner().then(response => setMovies(response.splice(0,8)))
    getAllPopular().then(response => setPopular(response.results))
    getAllTopRated().then(response => setTopRated(response.results))


  }, []);


  return (
    <Layout>
        <Banner items={movies}/>
        <Posters items={popular} text={"Popular Movies"}/>
        <Posters items={topRated} text={"Better Movies"}/>
    </Layout>
  );
};


export const Home = withAuth(HomeMoviesPage);
