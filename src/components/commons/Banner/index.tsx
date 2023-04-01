import { Carousel } from "react-bootstrap";
import "./styles.scss";
import { InfoMovies } from "../../../types";
import { FC } from "react";
import { BASE_IMAGE } from "../../../constants";

const Banner: FC<InfoMovies>= ({items}) => {

return(
    <Carousel className="carousel-container">
        {items?.map((item:any) => (
            <Carousel.Item key={item.id}>
                <img
                    className="d-block w-100 card-img-top"
                    src={`${BASE_IMAGE + item.backdrop_path}`}
                    alt="First slide"
            />
                <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p>{item.overview}</p>
                </Carousel.Caption>
            </Carousel.Item>
        ))}
    </Carousel>
    );
};

export { Banner }




