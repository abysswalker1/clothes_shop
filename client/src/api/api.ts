
export const getAllProductsApi = (title: string = '0', page: number = 1) => {
    return fetch(`http://localhost:5000/products/categories/${title}/${page}`, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
    })
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
    if(categoryType){
        return fetch(`http://localhost:5000/products/${categoryType + '/'}${searchParams}`)
    } else {
        return fetch(`http://localhost:5000/products/${searchParams}`)
    }
    
}
    
