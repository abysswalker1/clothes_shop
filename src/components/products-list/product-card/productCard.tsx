import React, {useEffect} from 'react';
import './productCard.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {addProductToFavsAction} from "../../../store/productsReducer";
import { MainStateType, ProductType } from '../../../types';

type Props = {
    item: ProductType
    addProductToFavsAction: (item: ProductType) => void
    favs: ProductType[]
}

const ProductCard : React.FC<Props> = ({item, ...props}) => {
    let shortedTitle = (item.title?.length > 50)
        ? item.title.slice(0, 46) + '...'
        : item.title;

    let [isInfavs, setIsInFavs] = React.useState(false)

    useEffect(() => {
        if( props.favs.find(favItem => favItem.id === item.id) ){
            setIsInFavs(true);
        } else
            setIsInFavs(false); 
    },[props.favs]);

    return (
        <div className='product-card_wrap'
        
        >
            <Link to={`/products/${item.id}`} className="product-card">
                <div className="product-card__img-wrap">
                    <img src={item.image} className="product-card__img" alt={item.title}/>
                </div>
                <p className="product-card__title">{shortedTitle}</p>
                <h2 className="product-card__price number-font">{item.price + ' р'}</h2>
            </Link>

            <button className="product-card__add-to-favs"
                    onClick={() => props.addProductToFavsAction(item)}
            >
                { (isInfavs) ? <i className="bi bi-suit-heart-fill"></i> : <i className="bi bi-suit-heart"></i>}
            </button>
        </div>
    );
};

export default connect(
    (state: MainStateType) => {
        return {
            favs: state.products.favs
        }
    }, 
    { addProductToFavsAction }
)(ProductCard);