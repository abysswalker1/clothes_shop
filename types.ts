import { Request } from "express";

export type CategoryType  = {
  cateory_id: number
  cateorry_title: string
}

export type SizeType = "36" | "38" | "42" | "44" | "46" | "48" | "50" | "52" | "54";

export type ProductParameterType = {
  size: SizeType,
  quantity: number
}

export type ProductType = {
  id: number
  categories: number[]
  title: string
  description: string
  image: string
  imageList?: string[]
  price: number
  parameters: ProductParameterType[]
  sale?: { title: string, percent: number }
}

export type SearchQueryParams = {
  title?: string
  min?: number
  max?: number
}

export type RequestWithBody<T> = Request<{}, {}, T>;
export type RequestWithQuery<T> = Request<{}, {}, {}, T>;
export type RequestWithParams<T> = Request<T, {}, {}, SearchQueryParams> 