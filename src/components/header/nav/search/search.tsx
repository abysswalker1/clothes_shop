import React from 'react';
import './search.css'
import {Form, Field} from "react-final-form";

const Search = () => {
    return (
            <Form onSubmit={() => console.log('Искать')}>
                {   ({handleSubmit}) => (
                    <form className='search' onSubmit={handleSubmit}>
                        <Field name='search'
                               component='input'
                               type='text'
                               className='search-input'
                               placeholder='Поиск по каталогу'
                        ></Field>
                        <button className="search-btn" type='submit'>
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                    )
                }
            </Form>
    );
};

export default Search;