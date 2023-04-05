import { Request } from "express";

export type CategoryType  = {
  cateory_id: number
  cateorry_title: string
}

export type ProductType = {
  id: number
  categories: number[]
  title: string
  description: string
  image: string
  imageList?: string[]
  price: number
  rating?: any
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