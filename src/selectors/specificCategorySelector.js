import React from "react";
import {createSelector} from "reselect";
import ProductCard from "../components/products-list/product-card/productCard";


const getSpecificCategorySelector = (state) => {
    return state.products.specificCategories;
};

export const getSpecificCategoryHighSelector = createSelector(getSpecificCategorySelector, (products) => {
    return products.map((item) => {
        return (<ProductCard
            key={item[0].id + ''}
            item={item[0]}
        />)
    })
})