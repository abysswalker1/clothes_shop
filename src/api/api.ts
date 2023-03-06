
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

export const setSpecificCategoryApi = (title: string) => {
    return fetch(`https://fakestoreapi.com/products/category/${title}`)
        .then(response => {
            return response.json();
        });
}

export const getNeededProductApi = (itemId: number) => {
    return fetch(`https://fakestoreapi.com/products/${itemId}`)
        .then(response => {
            return response.json();
        })
}