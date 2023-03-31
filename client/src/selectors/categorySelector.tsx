import React from "react";
import {createSelector} from "reselect";
import CaltegoryLink from "../components/categories/category-link/caltegoryLink";
import { ProductsStateType } from "../store/productsReducer";

const getCategorySelector = (state: ProductsStateType) => {
    return state.categories;
}

export const getCategoryHighSelector = createSelector(getCategorySelector, (categories) => {
    return categories.map((item) => {
        return (<CaltegoryLink
            key={item}
            category={item}
        />)
    })
})