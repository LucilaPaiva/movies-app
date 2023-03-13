import { FC } from "react";
import { BASE_IMAGE } from "../../../constants";
import { DetailsType } from "../../../types";
import './styles.scss';

const Details: FC<DetailsType> = ({ items }) => {
  return (
    <div className="container-detail">
      <div className="img-detail">
        <img src={`${BASE_IMAGE + items.poster_path}`} alt="First slide" />
      </div>
      <div className="text-detail">
        <h3>{items.title}</h3>
        <h6>{items.overview}</h6>
      </div>
    </div>
  );
};

export { Details };
