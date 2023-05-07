import { ReducersType } from './store/store';

export type SizeType = "36" | "38" | "42" | "44" | "46" | "48" | "50" | "52" | "54";

export type ProductParameterType = {
  size: SizeType,
  quantity: number
}

export type ProductType = {
    id: number
    categories?: string[]
    category: string
    title: string
    description: string
    image: string
    imageList?: []
    article: string
    price: number
    fullPrice?: number
    parameters: ProductParameterType[]
    sale?: { title: string, percent: number }
}

export interface CategoryType {
  category_id: number
  category_title: string  
}

export interface SaleCategoryType extends CategoryType {
  category_type: 'SALE'
  percentage: number
}

export type SpecificCartProductType = {
  product: ProductType
  parameters: ProductParameterType
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

export type PageLoadType = {
  count: number
  thunk: ThunkType
}

export type ProductsListType = JSX.Element[] 

export interface CompilationType {
  title: string
  items: ProductType[]
  pages: number
};

export type MainStateType = ReturnType<ReducersType>

export type ThunkType = any //ThunkAction<Promise<void>, MainStateType, unknown, ActionType>