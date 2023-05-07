import React, { useEffect } from 'react';
import { Breadcrumbs } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './breadCrumbs.css'

const BreadCrumbs = () => {
  const location = useLocation();
  const splitLocation = [... new Set(location.pathname.split('/'))]; 
  const [crumbElems, setCrumbElems] = React.useState([] as Array<{link: string, title: string}>)

  const translateTitles: Record<string, string> = {
    "": "Главная",
    "category": "Категории",
    "products": "Товары",
    "register": "Регистрация",
    "cart": "Корзина",
    "favorites": "Избранное"
  } 

  useEffect(()  =>  {
    let correctTitle = (title: string): string => translateTitles[title] || title || '...';
    let accumulator = '';

    setCrumbElems(() => {
      const newCrumbsList = []; 

      for (let partial of splitLocation)  {
        accumulator += partial + '/';
  
        newCrumbsList.push(
          {link: accumulator, title: correctTitle(partial)}
        )
      }
      accumulator = '';
      return newCrumbsList;
    })
  }, [location])

  return (
    <div className='bread-crumbs'>
      <Breadcrumbs aria-label="breadcrumb">
        { crumbElems.map(crumb => (
            <NavLink to={crumb.link}>{crumb.title}</NavLink>
          ))
        }
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumbs;