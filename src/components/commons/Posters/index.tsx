import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_IMAGE } from "../../../constants";
import { InfoMovies } from "../../../types";
import "./styles.scss";






const Posters: FC<InfoMovies> = ({ items, text}) =>{

    const navigate = useNavigate();

    return(
        <div className="scroll">
            <div className="title">{text}</div>
            <div className="row pb-4">
                {items.map((item: any) =>
                    <img className="col card-block" key={item.id} onClick={() => navigate(`/movie/${item.id}`)}
                    src={`${BASE_IMAGE + item.poster_path}`}
                    alt= "First slide"
                    />
                )}
            </div>
        </div>
    );
}



export { Posters }