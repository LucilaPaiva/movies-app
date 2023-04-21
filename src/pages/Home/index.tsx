import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { getPopular, getBanner, getAllTopRated } from "../../services/movies";
import { Banner } from "../../components/commons/Banner";
import { Posters } from "../../components/commons/Posters";
import { withAuth } from "../../hoc";




const HomeMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {

    getBanner().then(response => setMovies(response.splice(0,8)))
    getPopular({page:"1"}).then(response => setPopular(response.results))
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
