import { Request } from "express";

export type ProductType = {
  id: number
  categories?: string[]
  category: string
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