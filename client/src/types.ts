import { ReducersType } from './store/store';

export type ProductType = {
    id: number
    categories?: string[]
    category: string
    title: string
    description: string
    image: string
    imageList?: []
    price: number
    sale?: { title: string, percent: number }
}

export type CategoryType  = {
  category_id: number
  category_title: string
}

export type UserType = {
  id: number
  email: string
}

export type SearchQueryParams = {
    title?: string
    min?: number
    max?: number
  }

export type ProductsListType = JSX.Element[] 

export type SpecificCategoryType = [string, Array<ProductType>]

export type MainStateType = ReturnType<ReducersType>

export type ThunkType = any //ThunkAction<Promise<void>, MainStateType, unknown, ActionType>