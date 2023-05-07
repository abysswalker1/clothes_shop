import React from 'react';
import './pricepicker.css';
import { setPriceRangeAction } from '../../store/productsReducer';
import { Slider } from '@material-ui/core';
import { connect } from 'react-redux';
import { MainStateType } from '../../types'
import Button from '@material-ui/core/Button';

type Props = {
  totalPrice: {minimumPrice: number, maximumPrice: number},
  priceRange: number[] | null
  setPriceRangeAction: any
}

const Pricepicker: React.FC<Props> = (props) => {
  const [range, setRange] = React.useState<[number, number]>([10, 80]);

  const handleChange = (event: any, newValue: any) => {
    setRange(newValue);
  };

  return (
    <div className='price-picker'>
      <Slider
        value={range}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={props.totalPrice.minimumPrice}
        max={props.totalPrice.maximumPrice}
      />
      <div className="price-picker__buttons">
        <Button onClick={() => props.setPriceRangeAction(range)} data-testid='range-set-button'>Применить</Button>
        { props.priceRange &&  
          <Button onClick={() => props.setPriceRangeAction(null)} data-testid='range-clear-button' className='clear-range-button'>
            сбросить
          </Button>
        }
      </div>
    </div>
  );
};

export default connect(
  (state: MainStateType) => ({
    totalPrice: state.products.totalPrice,
    priceRange: state.products.priceRange
  }),
  { setPriceRangeAction }
)(Pricepicker);