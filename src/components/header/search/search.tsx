import React from 'react';
import { Field, Form } from 'react-final-form';
import './search.css';

const Search = () => {
  const [active, setActive] = React.useState(false);

  const onSubmit = () => {
    alert(active)
  }

  return (
    <Form onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="search">
                <input type="text" className='search-input'/>
                { (active) ?
                    <button className="search-btn" type='button'>
                      <i className="bi bi-search"></i>
                    </button>
                           :
                    <button className="search-btn aaa" onClick={() => {setActive(true)}} type='button'>
                      <i className="bi bi-search"></i>
                    </button>
                }
            </form>
        )}
    />
  );
};

export default Search;