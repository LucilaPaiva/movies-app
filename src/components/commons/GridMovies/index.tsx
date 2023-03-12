import { FC } from "react";
import { BASE_IMAGE } from "../../../constants";
import { GridCardPosters } from "../../../types";




const GridMovies: FC<GridCardPosters> = ({ items, text}) =>{

    return(
        <div className="grid">
            <div className="title">{text}</div>
            <div className="row pb-4">
                {items.map((item: any) =>
                    <img className="col card-block" key={item.id}
                    src={`${BASE_IMAGE + item.poster_path}`}
                    alt= "First slide"
                    />
                )}
            </div>
        </div>
    );
}

export { GridMovies }