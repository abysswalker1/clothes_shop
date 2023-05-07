import React from "react";
import {createSelector} from "reselect";
import ProductCard from "../components/products-list/product-card/productCard";
import { CompilationType } from "../types";


const getSpecificCategorySelector = (state: CompilationType) => {
    return state.items;
};

export const getSpecificCategoryHighSelector = createSelector(getSpecificCategorySelector, (products) => {
    return products.map((item) => {
        return (<ProductCard
            key={item + ''}
            item={item}
        />)
    })
})