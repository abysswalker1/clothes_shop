import React from 'react';
import './main.css'

const Main = (props: {children: JSX.Element}) => {
  return (
    <div className='main container'>
      <>{props.children}</>
    </div>
  );
};

export default Main;