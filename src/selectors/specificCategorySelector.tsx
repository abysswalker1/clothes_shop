import React from "react";
import {createSelector} from "reselect";
import ProductCard from "../components/products-list/product-card/productCard";
import { SpecificCategoryType } from "../types";


const getSpecificCategorySelector = (state: SpecificCategoryType) => {
    return state[1];
};

export const getSpecificCategoryHighSelector = createSelector(getSpecificCategorySelector, (products) => {
    return products.map((item) => {
        return (<ProductCard
            key={item + ''}
            item={item}
        />)
    })
})