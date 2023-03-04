import React from "react";
import {createSelector} from "reselect";
import CaltegoryLink from "../components/sidebar/category-link/caltegoryLink";


const getCategorySelector = (state) => {
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