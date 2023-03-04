import Axios from "axios";

const instance = Axios.create({
    withCredentials: true,

})

export const getAllProductsApi = () => {
    return fetch('https://fakestoreapi.com/products/')
        .then(response => {
            return response.json()
        });
}

export const getCategoriesApi = () => {
    return fetch('https://fakestoreapi.com/products/categories')
            .then(response => {
                return response.json()
            });
}

export const setSpecificCategoryApi = (title) => {
    return fetch(`https://fakestoreapi.com/products/category/${title}`)
        .then(response => {
            return response.json()
        });
}