import express, { response } from 'express';;
import { Response, Request } from 'express';
import { httpStatuses } from '../constants';
import { ProductType ,RequestWithBody, RequestWithQuery, RequestWithParams, SearchQueryParams } from '../types';
import CreateProductModel from '../models/createProductModel';
import bd from '../data.json' ;
import { request } from 'http';

const { BAD_REQUEST_400, NOT_FOUND_404 } = httpStatuses;

// data links
// "links":{"first":"https:\/\/fakestoreapi.ru\/products?page=1","last":"https:\/\/fakestoreapi.ru\/products?page=2","prev":null,"next":"https:\/\/fakestoreapi.ru\/products?page=2"},"meta":{"current_page":1,"from":1,"last_page":2,"links":[{"url":null,"label":"&laquo; Previous","active":false},{"url":"https:\/\/fakestoreapi.ru\/products?page=1","label":"1","active":true},{"url":"https:\/\/fakestoreapi.ru\/products?page=2","label":"2","active":false},{"url":"https:\/\/fakestoreapi.ru\/products?page=2","label":"Next &raquo;","active":false}],"path":"https:\/\/fakestoreapi.ru\/products","per_page":10,"to":10,"total":12}

const getProductsRoutes= () => {
  const Router = express.Router();

  const filterBySearchParams = ( params: SearchQueryParams) => {
    let {title, min=700, max=6000} = params;

    let bySubstring = (item: ProductType): boolean => item.title.toLowerCase().indexOf(title as string) > -1;
    let byPrice = (item: ProductType) : boolean => item.price <= max && item.price >= min; 

    if( title ){
      return ( min && max ) ? (item: ProductType) => byPrice(item) && bySubstring(item) : byPrice   
    } else if ( min && max ){
      return byPrice;
    }
    return;
  }

  Router.get( '/', 
    (request: RequestWithQuery<{title: string, min: number, max: number}>, response: Response<ProductType[]>) => {
      let filter = filterBySearchParams(request.query);

      if( filter ){
        let filteredProductsList = bd.products.filter(item => filter && filter(item));
        response.json(filteredProductsList);
      } else {
        response.json(bd.products);
      }
    }
  )

  Router.get( '/get_categories', 
    (_, response) => {
      let categoriesList = bd.products.map(item => item.category);
      response.json([... new Set(categoriesList)]);
    }
  )
  
  Router.get( '/:id', 
    (request: RequestWithParams<{id: number}>, response: Response<ProductType>) => {
      const neededProduct = bd.products.find(item => item.id === +request.params.id);
      response.json(neededProduct);
    }
  )

  Router.get( '/categories/:title',     
    (request: RequestWithParams<{title: string}>, response: Response<ProductType[]>) => {
      let filter = filterBySearchParams(request.query);
      const specificCategory = bd.products.filter(item => item.category === request.params.title)

      if( filter ){
        let filteredProductsList = specificCategory.filter(item => filter && filter(item));
        response.json(filteredProductsList)
      } else {
        response.json(specificCategory);
      }
    }
  )
  
  // Router.post( '/', 
  //   ( request: RequestWithBody<CreateProductModel>, response: Response<ProductType>) => {
  //     if( !request.body.title ){
  //       response.sendStatus(BAD_REQUEST_400);
  //       return;
  //     }
  //     const newProduct = {
  //       id: +(new Date()),
  //       title: request.body.title,
  //       category: "woman's clothes",
  //       image: "https://yandex.ru/images/search?from=tabbar&text=sweatshirt%20stock%20image&pos=18&img_url=http%3A%2F%2Fst2.depositphotos.com%2F1027775%2F9252%2Fi%2F450%2Fdepositphotos_92524056-stock-photo-blue-cotton-sweater.jpg&rpt=simage&lr=54",
  //       description: 'some description',
  //       price: 20
  //     }
  //   }
  // )
  return Router;
}

export default getProductsRoutes;