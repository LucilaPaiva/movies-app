import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Layout } from "../../components";
import { BASE_IMAGE } from "../../constants";
import { getById } from "../../services/movies";
import { Movie } from "../../types";
import './styles.scss';
import { withAuth } from "../../hoc";
import Trailer  from "../../components/commons/Trailer";


const DetailsMoviesPage = () => {
  const [detail, setDetails] = useState<Movie>();
  const { id } = useParams();

  useEffect(() => {
    getById(id || "").then(response => {
      setDetails(response);
    })
  }, [id]);

  return (
    <Layout>
      <Container>
        <div
          className="container-detail"
          style={{
            backgroundImage: `url(${BASE_IMAGE}${detail?.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "80vh",
          }}
        >
          <div className="img-detail">
            <img src={`${BASE_IMAGE + detail?.poster_path}`} alt="Slide Details" />
          </div>
          <div className="text-detail">
            <h3>{detail?.title}</h3>
            <h6>{detail?.overview}</h6>
          </div>
          <Trailer movieTitle={detail?.title || ''} />
        </div>
      </Container>
    </Layout>
  );
}

export const DetailsPage = withAuth(DetailsMoviesPage);








