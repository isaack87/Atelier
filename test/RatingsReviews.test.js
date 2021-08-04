import 'jsdom-global/register';
import React from 'react';

import { shallow, mount } from 'enzyme';
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
    const initialProps = {images: ['www.google.com']}
    const wrapper =  mount(<Reviews><Images/></Reviews>  );
    const imagesElem = wrapper.find('Images');
    // expect(wrapper.find(Images)).toBeTruthy();
    expect(imagesElem).toBeTruthy();
    //now we want to test the props of images

    console.log(imagesElem.instance())
    

  });
});


// describe('Ratings', function () {
//   it('should render Ratings component without crashing', function () {
//     const wrapper = shallow(<Ratings characteristics={[]}/>);
//     expect(wrapper.hasClass('reviewRatings')).toBeTruthy();
//   });
//   it('should render characterstics lists', function () {
//     const characteristics = [{ fit: 4 }];
//     const wrapper = shallow(<Ratings characteristics={characteristics}/>);
//     expect(wrapper.find('input')).toHaveLength(characteristics.length);
//   });
// });