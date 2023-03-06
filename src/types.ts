import { ReducersType } from './store/store';

export type ProductType = {
    category: string
    id: number
    title: string
    description: string
    image: string
    price: number
    rating?: any

}

export type ProductsListType = JSX.Element[] 

export type SpecificCategoryType = [string, Array<ProductType>]

export type MainStateType = ReturnType<ReducersType>

export type ThunkType = any //ThunkAction<Promise<void>, MainStateType, unknown, ActionType>