import React from 'react';
import './main.css'
import BreadCrumbs from '../common/bread-crumbs/BreadCrumbs';

const Main = (props: {children: JSX.Element}) => {
  return (
    <div className='main container'>
      <BreadCrumbs />
      <>{props.children}</>
    </div>
  );
};

export default Main;