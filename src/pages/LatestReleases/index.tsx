import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Layout } from "../../components";
import { BASE_IMAGE } from "../../constants";
import { getAllLatestReleases } from "../../services/movies";
import { Movie } from "../../types";
    

    
    const LatestReleases  = () => {

        const [movies, setMovies] = useState<Movie>();;
    
    useEffect(() => {
            
        getAllLatestReleases().then(response => {
        setMovies(response)})
        
    }, []);
    
    console.log(movies)
        return(
            <Layout>
                <Container className="container-detail"
                style={{
                    backgroundImage: `url(${BASE_IMAGE}${movies?.backdrop_path})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                }}
                >
                <div className="img-detail">
                    <img src={`${BASE_IMAGE + movies?.poster_path}`} alt="Slide Details" />
                </div>
                <div className="text-detail">
                    <h3>{movies?.title}</h3>
                    <h6>{movies?.overview}</h6>
                </div>
            </Container>
            </Layout>
        )
        
    }
        
    export { LatestReleases }
