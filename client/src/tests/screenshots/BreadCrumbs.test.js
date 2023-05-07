import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Breadcrumbs from '../../components/common/bread-crumbs/BreadCrumbs';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

describe('Breadcrumbs component', () => {
  beforeEach(() => {
    useLocation.mockReturnValue({ pathname: '/category/products' });
  });

  it('should render breadcrumbs correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Breadcrumbs />
      </BrowserRouter>
    );

    expect(getByText('Главная')).toBeInTheDocument();
    expect(getByText('Категории')).toBeInTheDocument();
    expect(getByText('Товары')).toBeInTheDocument();
  });
}); 