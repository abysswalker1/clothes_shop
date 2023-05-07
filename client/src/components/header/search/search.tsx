import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Field, Form } from 'react-final-form';
import { connect } from 'react-redux';
import { getSearchedProductsThunk } from '../../../store/productsReducer';
import './search.css';

type Props = {
  getSearchedProductsThunk: (params: {title: string}) => void
}

const Search: React.FC<Props> = (props) => {
  const navigate = useNavigate(); 

  const onSubmit = (values: {search: string}) => {
    if( values.search ) {
      navigate(`/products`)
      props.getSearchedProductsThunk({title: values.search})
    }
  }

  return (
    <Form onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="search">
              <Field component="input" type="text" className='search-input active' name='search' />
              <button className="search-btn" type='submit'>
                <i className="bi bi-search"></i>
              </button>
            </form>
        )}
    />
  );
};

export default connect(null, { getSearchedProductsThunk })(Search);