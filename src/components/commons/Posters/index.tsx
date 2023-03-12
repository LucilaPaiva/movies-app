import { FC } from 'react';
import  { SliderPosters } from '../../../types';
import { BASE_IMAGE } from '../../../constants';
import './styles.scss';

const Posters: FC<SliderPosters> = ({ items, text }) => {

    return(
        <div className="scroll">
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
    )
}

export { Posters }