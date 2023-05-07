import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PricePicker from '../../components/price-picker/Pricepicker'
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

describe('Pricepicker', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      products: {
        totalPrice: {
          minimumPrice: 10,
          maximumPrice: 80
        },
        priceRange: [20, 50]
      }
    });

    component = render(
      <Provider store={store}>
        <PricePicker />
      </Provider>
    );
  });

  it('should render the range-set-button', () => {
    const { getByTestId } = component;
    const button = getByTestId('range-set-button');
    expect(button).toBeInTheDocument();
  });

  it('should show range-clear-button after range-set-button is clicked', () => {
    const { getByTestId } = component;
    const setButton = getByTestId('range-set-button');
    fireEvent.click(setButton);
    const clearButton = getByTestId('range-clear-button');
    expect(clearButton).toBeInTheDocument();
  });
});