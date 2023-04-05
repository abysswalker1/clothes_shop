import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  setSpecificCategoryThunk,
  getSearchedProductsThunk,
  getSearchedResultsAction,
  setPriceRangeAction,
} from '../../../store/productsReducer';
import ProductsList from '../../products-list/productsList';
import productsListSelector from '../../../selectors/productsListSelector';
import {
  MainStateType,
  SpecificCategoryType,
  ProductType,
  SearchQueryParams,
  CategoryType,
} from '../../../types';
import Sidebar from '../../sidebar/sidebar';
import './catalog.css';

type Props = {
  specificCategories: Array<SpecificCategoryType>;
  products: Array<ProductType>;
  searchResults: Array<ProductType> | null;
  priceRange: null | number[];
  categories: CategoryType[];
  setSpecificCategoryThunk: (title: string) => void;
  getSearchedProductsThunk: (params: SearchQueryParams, categoryTitle: string) => void;
  getSearchedResultsAction: any;
  setPriceRangeAction: any;
};

const Catalog: React.FC<Props> = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const { title } = useParams();
  const [productsList, setProductsList] = React.useState<JSX.Element[]>([]);

  useEffect(() => {
    let neededCategory = props.specificCategories.filter((item) => item[0] === title);

    if (props.searchResults) {
      setProductsList(productsListSelector(props.searchResults));
    } else if (!title) {
      setProductsList(productsListSelector(props.products));
    } else if (neededCategory.length > 0) {
      setProductsList(productsListSelector(neededCategory[0][1]));
    } else {
      props.setSpecificCategoryThunk(title);
    }
  }, [title, props.specificCategories, props.products, props.searchResults]);

  useEffect(() => {
    let isTitleParam = queryParams.get('title') ? `title=${queryParams.get('title')}&` : '';

    if (props.priceRange) {
      navigate(
        `${location.pathname}?${isTitleParam}min=${props.priceRange[0]}&max=${props.priceRange[1]}`,
      );
    } else {
      navigate(`${location.pathname}? ${isTitleParam}`);
    }
  }, [props.priceRange, title]);

  useEffect(() => {
    props.getSearchedResultsAction(null);
    if (queryParams.get('title') || queryParams.get('max') || queryParams.get('min')) {
      props.getSearchedProductsThunk(
        Object.fromEntries(queryParams),
        title ? `categories/${title}` : '',
      );
    }
  }, [location]);

  return (
    <main className="main">
      <div className="main__container container">
        <Sidebar />
        <div className="catalog">
          <h1 className="catalog__title">
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
          <ProductsList key={productsList.length} productsList={productsList} />
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

export default compose(
  connect(mapStateToProps, {
    setSpecificCategoryThunk,
    getSearchedProductsThunk,
    getSearchedResultsAction,
    setPriceRangeAction,
  }),
)(Catalog);
