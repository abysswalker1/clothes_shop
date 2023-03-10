import React from "react";
import {createSelector} from "reselect";
import ProductCard from "../components/products-list/product-card/productCard";
import { ProductsListType, ProductType } from "../types";


const getProductsListSelector = (state: Array<ProductType>) => {
    return state;
};
const getProductsListHighSelector = createSelector(getProductsListSelector, (products) => {
    return products.map((item) => {
        return (<ProductCard
            key={item.id + ''}
            item={item}
        />)
    })
});

export default getProductsListHighSelector;