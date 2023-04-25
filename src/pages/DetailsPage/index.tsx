import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Layout } from "../../components";
import { BASE_IMAGE } from "../../constants";
import { getById } from "../../services/movies";
import { Details, Movie, Video } from "../../types";
import "./styles.scss";
import { withAuth } from "../../hoc";
import YouTube from "react-youtube";

const DetailsMoviesPage = () => {
  const [detail, setDetails] = useState<Movie>();
  const { id } = useParams();
  const [trailer, setTrailer] = useState<Video>()

  useEffect(() => {
    getById(id || "").then((response) => {
    setDetails(response);
    });
  }, []);

  useEffect(() => {
    if (id) {
      
        getById(id, {
          append_to_response: "videos",
        })
        .then((data) => {
          setTrailer(data.results);

          if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(
              (vid: { name: string }) => vid.name === "Official Trailer"
            );
            setTrailer(trailer ? trailer : data.videos.results[0]);
          }
        });
    }
  }, []);

  return (
    <Layout>
      <Container>
        <div
          className="container-detail"
          style={{
            backgroundImage: `url(${BASE_IMAGE}${detail?.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        >
          <div className="img-detail">
            <img
              src={`${BASE_IMAGE + detail?.poster_path}`}
              alt="Slide Details"
            />
          </div>
          <div className="text-detail">
            <h3>{detail?.title}</h3>
            <h6>{detail?.overview}</h6>
            {
                    video.length >= 1 &&
                    <YouTube
                        videoId={video[0].key}
                        id={video[0].id}
                        className={'trailer'}
                        opts={{
                            height: '190',
                            width: '340'
                        }}
                    />
                }
          </div >
        </div>
      </Container>
    </Layout>
  );
};

export const DetailsPage = withAuth(DetailsMoviesPage);


