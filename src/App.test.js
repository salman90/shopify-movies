import React from 'react';
// import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import App from './App';
import Search from './components/search';
import SearchList from './components/searchList'

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// test


describe('App', () => {
  
  test('snapshot renders', () => {

    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render the orginal loading state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('loading')).toBe(false);
  })


  it('renders child Search component', () => {
    // const wrapper =  mount(<App />);
    // expect(wrapper.find(Search).length.toEqual(1));
    const wrapper = mount(<App />);
    expect(wrapper.find(Search).length).toEqual(1);
  });
  
});
