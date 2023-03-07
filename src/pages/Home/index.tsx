import { useEffect, useState } from "react";
import { Layout } from "../../components";
import { getAllPopular, getBanner } from "../../services/movies";
import { Banner } from "../../components/commons/Banner";




const Home = () => {
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([])

  useEffect(() => {

    getBanner().then(response => setMovies(response.splice(0,6)))
    getAllPopular().then(response => setPopular(response.results))


  }, []);
  console.log(movies, popular);

  return (
    <Layout>
        <Banner items={movies}/>
    </Layout>
  );
};



export { Home };
