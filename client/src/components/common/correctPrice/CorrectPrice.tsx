import React from 'react';

type Props = {
  price: number
  fullPrice: number | undefined
}

const CorrectPrice: React.FC<Props> = ({price, fullPrice}) => {
  return (
    <>
     {price + 'р.'} <span className='price-without-sale'>{fullPrice && fullPrice + 'р.'}</span> 
    </>
  );
};

export default CorrectPrice;