import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import { Link } from 'react-router-dom';
import { ProductCard } from '../../components/products-list/product-card/productCard';
import CorrectPrice from '../../components/common/correctPrice/CorrectPrice';
import Adapter from '@cfaester/enzyme-adapter-react-18';

Enzyme.configure({ adapter: new Adapter() });

describe('ProductCard', () => {
  const item = {
    id: 1,
    title: 'Product Title',
    image: 'image.jpg',
    price: 10,
    fullPrice: 20
  };
  const addProductToFavsAction = jest.fn();
  const favs = [];

  it('renders without crashing', () => {
    shallow(<ProductCard item={item} addProductToFavsAction={addProductToFavsAction} favs={favs} />);
  });

  it('renders a Link with the correct path', () => {
    const wrapper = shallow(<ProductCard item={item} addProductToFavsAction={addProductToFavsAction} favs={favs} />);
    if (wrapper.instance().context) {
    expect(wrapper.instance().context.contextTypes).toBeDefined();
  }
    const link = wrapper.find(Link);
    expect(link.prop('to')).toEqual(`/products/${item.id}`);
  });

  it('renders a CorrectPrice component with the correct props', () => {
    const wrapper = shallow(<ProductCard item={item} addProductToFavsAction={addProductToFavsAction} favs={favs} />);
    if (wrapper.instance().context) {
    expect(wrapper.instance().context.contextTypes).toBeDefined();
  }
    const correctPrice = wrapper.find(CorrectPrice);
    expect(correctPrice.prop('price')).toEqual(item.price);
    expect(correctPrice.prop('fullPrice')).toEqual(item.fullPrice);
  });

  it('calls addProductToFavsAction when the add to favorites button is clicked', () => {
    const wrapper = shallow(<ProductCard item={item} addProductToFavsAction={addProductToFavsAction} favs={favs} />);
    if (wrapper.instance().context) {
    expect(wrapper.instance().context.contextTypes).toBeDefined();
  }
    const button = wrapper.find('.product-card__add-to-favs');
    button.simulate('click');
    expect(addProductToFavsAction).toHaveBeenCalledWith(item);
  });

  describe('shortedTitle', () => {
    it('shortens the title if it is longer than 50 characters', () => {
      const longTitle = 'This is a very long title that should be shortened';
      const itemWithLongTitle = { ...item, title: longTitle };
      const wrapper = shallow(<ProductCard item={itemWithLongTitle} addProductToFavsAction={addProductToFavsAction} favs={favs} />);
      if (wrapper.instance().context) {
    expect(wrapper.instance().context.contextTypes).toBeDefined();
  }
      const title = wrapper.find('.product-card__title');
      expect(title.text()).toEqual(`${longTitle.slice(0, 46)}...`);
    });

    it('does not shorten the title if it is shorter than or equal to 50 characters', () => {
      const wrapper = shallow(<ProductCard item={item} addProductToFavsAction={addProductToFavsAction} favs={favs} />);
      if (wrapper.instance().context) {
    expect(wrapper.instance().context.contextTypes).toBeDefined();
  }
      const title = wrapper.find('.product-card__title');
      expect(title.text()).toEqual(item.title);
    });
  });

  describe('isInfavs', () => {
    it('shows a filled heart icon if the product is in the favorites list', () => {
      const favs = [item];
      const wrapper = shallow(<ProductCard item={item} addProductToFavsAction={addProductToFavsAction} favs={favs} />);
      if (wrapper.instance().context) {
    expect(wrapper.instance().context.contextTypes).toBeDefined();
  }
      const button = wrapper.find('.product-card__add-to-favs');
      expect(button.containsMatchingElement(<i className="bi bi-suit-heart-fill"></i>)).toBeTruthy();
    });

    it('shows an empty heart icon if the product is not in the favorites list', () => {
      const wrapper = shallow(<ProductCard item={item} addProductToFavsAction={addProductToFavsAction} favs={favs} />);
      if (wrapper.instance().context) {
    expect(wrapper.instance().context.contextTypes).toBeDefined();
  }
      const button = wrapper.find('.product-card__add-to-favs');
      expect(button.containsMatchingElement(<i className="bi bi-suit-heart"></i>)).toBeTruthy();
    });

    it('updates the isInfavs state when the favs prop changes', () => {
      const favs = [item];
      const wrapper = shallow(<ProductCard item={item} addProductToFavsAction={addProductToFavsAction} favs={favs} />);
      if (wrapper.instance().context) {
    expect(wrapper.instance().context.contextTypes).toBeDefined();
  }
      expect(wrapper.state('isInfavs')).toBeTruthy();
      wrapper.setProps({ favs: [] });
      expect(wrapper.state('isInfavs')).toBeFalsy();
    });
  });
});