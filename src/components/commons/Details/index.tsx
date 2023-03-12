import { FC } from "react";
import { BASE_IMAGE } from "../../../constants";
import { Details } from "../../../types";


const Details: FC<Details> = ( { items }) =>{
    return(
        <div className="container-detail">
            <div className="img-detail">
            <img  src={`${BASE_IMAGE + items.poster_path}`} 
                    alt= "First slide"
             />       
            </div>
        </div>
    )
}

export { Details } 