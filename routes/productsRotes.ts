import express,  { Response, Request } from 'express';
import { httpStatuses } from '../constants';
import { ProductType ,RequestWithBody, RequestWithQuery, RequestWithParams, SearchQueryParams, CompilationType } from '../types'
import bd from '../data.json'; 

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


  const computePriceWithSale = (product: ProductType) => {
    const { price } = product;

    if (product.sale) {
      product.price = price - (price * product.sale.percent / 100);
      product.fullPrice = price;
    }  
    return product;
  }

  const products = bd.products.map(product => computePriceWithSale(product))

  //Router
  Router.get( '/get_categories', 
    (_, response) => {
      response.json(bd.categories)
    }
  )
  
  Router.get( '/:id', 
    (request: RequestWithParams<{id: number}>, response: Response<ProductType>) => {
      const neededProduct = products.find(item => item.id === +request.params.id);
      response.json(neededProduct);
    }
  )

  Router.get( '/categories/:title',     
    (request: RequestWithParams<{title: string}>, response: Response<CompilationType>) => {
      let resultProducts = products;

      if( +request.params.title > 0 )
        resultProducts = products.filter(item => item.categories.includes(+request.params.title));

      response.json(
        {
          title: request.params.title,
          items: resultProducts,
          pages: resultProducts.length / 8
        }
      );
    }

  )

  Router.get('/categories/:title/:page', 
  (request: RequestWithParams<{title: string, page: string}>, response: Response<ProductType[]>) => {
    let resultProducts = products;

    if( +request.params.title > 0 )
      resultProducts = products.filter((item: ProductType) => item.categories.includes(+request.params.title));

    let getPage = (products: ProductType[]) => {
      let lastItem = 8;
      
      if( +request.params.page > 1 ) {
        lastItem = lastItem * +request.params.page;
      }

      return products.slice(lastItem - 8, lastItem)
    }

    response.json(getPage(resultProducts))
  })

  return Router;
}

export default getProductsRoutes;