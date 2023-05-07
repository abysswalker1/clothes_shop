import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Action, compose } from 'redux';
import { connect } from 'react-redux';
import {
  setSpecificCategoryThunk,
  getSearchedProductsThunk,
  getSearchedResultsAction,
  setPriceRangeAction,
  getProductsThunk
} from '../../../store/productsReducer';
import ProductsList from '../../products-list/productsList';
import productsListSelector from '../../../selectors/productsListSelector';
import {
  MainStateType,
  CompilationType,
  ProductType,
  SearchQueryParams,
  CategoryType,
  ThunkType,
} from '../../../types';
import Sidebar from '../../sidebar/sidebar';
import './catalog.css';
import ActionType from '../../../action-types';

type Props = {
  specificCategories: Array<CompilationType>;
  products: Array<ProductType>;
  searchResults: Array<ProductType> | null;
  priceRange: null | number[];
  categories: CategoryType[];
  setSpecificCategoryThunk: (title: string) => void;
  getSearchedProductsThunk: (params: SearchQueryParams, categoryTitle: string) => void;
  getProductsThunk: () => void;
  getSearchedResultsAction: any;
  setPriceRangeAction: any;
};

const Catalog: React.FC<Props> = (props) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { title } = useParams();
  const [productsList, setProductsList] = React.useState<JSX.Element[]>([]);

  useEffect(() => {
    if(props.products.length <= 0){
      props.getProductsThunk()
    }
  },[])

  useEffect(() => {
    let neededCategory: CompilationType = props.specificCategories.find((item) => item.title === title);

    if (props.searchResults) {
      setProductsList(productsListSelector(props.searchResults));
    } else if (!title) {
      setProductsList(productsListSelector(props.products));
    } else if (neededCategory) {
      setProductsList(productsListSelector(neededCategory.items));
    } else {
      props.setSpecificCategoryThunk(title);
    }
  }, [title, props.specificCategories, props.products, props.searchResults]);

  useEffect(() => {
    props.getSearchedResultsAction(null);
  }, [location]);

  return (
    <main className="main">
      <div className="main__container container">
        <Sidebar />
        <div className="catalog">
          <h1 className="page-title">
            {(title &&
              props.categories
                .filter((category) => category.category_id === +title)
                .map((category) => category.category_title)) ||
              (queryParams.get('title') && `Результаты поиска: ${queryParams.get('title')}`) ||
              'Каталог'}
            {props.priceRange && (
              <span className="catalog__price-range">
                {`От ${props.priceRange[1]} до ${props.priceRange[0]} р.`}
              </span>
            )}
          </h1>
          <ProductsList key={productsList.length} productsList={productsList} loadMore={props.getProductsThunk} />
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state: MainStateType) => {
  return {
    categories: state.products.categories,
    specificCategories: state.products.specificCategories,
    products: state.products.productsList,
    searchResults: state.products.searchResults,
    priceRange: state.products.priceRange,
  };
};

const mapDispatchToProps = (dispatch: (action: ActionType | ThunkType) => void) => {
  let pageCount = 1;
  console.log(pageCount)
  return {
    setSpecificCategoryThunk: (title: string) => dispatch(setSpecificCategoryThunk(title)),
    getSearchedProductsThunk: () => dispatch(getSearchedProductsThunk),
    getSearchedResultsAction: () => dispatch(getSearchedResultsAction),
    setPriceRangeAction: () => dispatch(setPriceRangeAction),
    getProductsThunk: () => {
     return  dispatch(getProductsThunk(pageCount++))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Catalog);
