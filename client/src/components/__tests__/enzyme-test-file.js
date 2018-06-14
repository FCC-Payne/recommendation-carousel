import React from 'react';
import App from '../App.jsx';
import Carousel from '../Carousel.jsx';
import CarouselList from '../CarouselList.jsx';
import { shallow, render, mount } from 'enzyme';

describe('Render', () => {
  it('should have state.currentProduct set as null', () => {
    const wrapper = shallow(<Carousel />)
    const stateExists = wrapper.state().currentProduct;
    expect(stateExists).toBe(null)
  });
}); 
