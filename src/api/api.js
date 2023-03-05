
export const getAllProductsApi = () => {
    return fetch('https://fakestoreapi.com/products/')
        .then(response => {
            return response.json();
        });
}

export const getCategoriesApi = () => {
    return fetch('https://fakestoreapi.com/products/categories')
            .then(response => {
                return response.json();
            });
}

export const setSpecificCategoryApi = (title) => {
    return fetch(`https://fakestoreapi.com/products/category/${title}`)
        .then(response => {
            return response.json();
        });
}

export const getNeededProductApi = (itemId) => {
    return fetch(`https://fakestoreapi.com/products/${itemId}`)
        .then(response => {
            return response.json();
        })
}