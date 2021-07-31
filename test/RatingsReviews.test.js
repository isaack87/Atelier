import React from 'react';

import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Reviews from '../client/src/components/ratingsReviews/ratings';
import Images from '../client/src/components/ratingsReviews/images';

Enzyme.configure({ adapter: new Adapter() });

describe('Basic test', () => {
  it('adds 1 + 2 to equal 3', () => {
    const sum = (a, b) => {
      return a + b;
    };
    expect(sum(1, 2)).toBe(3);
  });
});



describe('Reviews',  () => {
  it('should be true that Reviews component exists', () => {
    const wrapper = shallow(<Reviews />)

      expect(wrapper).toMatchSnapshot()
  
    // expect(wrapper.find(Images)).toBeTruthy();

  });
});

describe('Images', () => {
  it('should be true that images component exists', () => {
    const wrapper =  shallow(<Reviews />);
    expect(wrapper.find(Images)).toBeTruthy();
  });
});