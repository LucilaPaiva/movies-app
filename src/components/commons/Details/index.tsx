import { FC } from "react";
import { BASE_IMAGE } from "../../../constants";
import { DetailsType } from "../../../types";
import "./styles.scss";


const Details: FC<DetailsType> = ( { items }) =>{
    
        return( 
        <div className="container-detail">
        <div className="img-detail">
            <img src={`${BASE_IMAGE + items.poster_path}`}
            alt="First slide" 
            />
        </div>
        <div>
            <h2>{items.title}</h2>
            <h6>{items.overview}</h6>
        </div>
    </div>
)
}

export { Details }