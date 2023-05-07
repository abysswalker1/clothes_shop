import React, {useEffect} from 'react';
import './productCard.css';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {addProductToFavsAction} from "../../../store/productsReducer";
import { MainStateType, ProductType } from '../../../types';
import CorrectPrice from '../../common/correctPrice/CorrectPrice';
//@ts-ignore
import image1 from '../../../assets/photo1.jpg';
//@ts-ignore
import image2 from '../../../assets/photo2.jpg';
//@ts-ignore
import image3 from '../../../assets/photo3.jpg';

type Props = {
    item: ProductType
    addProductToFavsAction: (item: ProductType) => void
    favs: ProductType[]
}

const ProductCard : React.FC<Props> = ({item, ...props}) => {
    let shortedTitle = (item.title?.length > 50)
        ? item.title.slice(0, 46) + '...'
        : item.title;

    let [isInfavs, setIsInFavs] = React.useState(false);
    let [photo, setPhoto] = React.useState(image1);

    const setPreviewPhoto = () => {
        setPhoto(image1);
    }

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
                    {item.image && <img src={photo} className="product-card__img" alt={''}/>}
                    <div className="product-card__img-overlay">
                        <div className="img-overlay-section" onMouseEnter={() => {setPhoto(image1)}} onMouseLeave={setPreviewPhoto}>
                            <div className="img-overlay-progress"></div>
                        </div>
                        <div className="img-overlay-section" onMouseEnter={() => {setPhoto(image2)}} onMouseLeave={setPreviewPhoto}>
                            <div className="img-overlay-progress"></div>
                        </div>
                        <div className="img-overlay-section" onMouseEnter={() => {setPhoto(image3)}} onMouseLeave={setPreviewPhoto}>
                            <div className="img-overlay-progress"></div>
                        </div>
                    </div>
                </div>
                
                    <p className="product-card__title"><strong>{item.id}</strong> {shortedTitle}</p>
                    <p className="product-card__price number-font"><CorrectPrice price={item.price} fullPrice={item.fullPrice}/></p>
            
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