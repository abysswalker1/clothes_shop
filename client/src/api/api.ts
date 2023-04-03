
export const getAllProductsApi = () => {
    return fetch('http://localhost:5000/products', {})
}

export const getCategoriesApi = () => {
    return fetch('http://localhost:5000/products/get_categories')
}
    
export const setSpecificCategoryApi = (title: string) => {
    return fetch(`http://localhost:5000/products/categories/${title}`)
}
    
export const getNeededProductApi = (itemId: number) => {
    return fetch(`http://localhost:5000/products/${itemId}`)
}

export const getSearchedProductByQueryApi = (searchParams: string, categoryType: string) => {
    return fetch(`http://localhost:5000/products/${categoryType}${searchParams}`)
}
    
export const postRegisterApi = (email: string, password: string) => {
    let data = {
        email: email,
        password: password
    }
    // return fetch('http://localhost:5000/auth/register', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // });
}