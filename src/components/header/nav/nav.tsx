import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

type Props = {
  openCategories?: () => void
  categoriesOpened?: boolean
}

const Nav: React.FC<Props> = (props) => {
  return (
    <nav className='nav'>
      <button onClick={() => props.openCategories()} 
              className={`nav__categories-btn ${(props.categoriesOpened ? 'opened' : '')}`}>
        Каталог <i className="bi bi-caret-down-fill"></i>
      </button>
      <Link to={'/products'} className="nav__categories-link">Каталог</Link>
      <Link to={'/products'}>Акции</Link>
      <Link to={'/'}>Контакты</Link>
      <Link to={'/'}>О нас</Link>
    </nav>
  );
};

export default Nav;