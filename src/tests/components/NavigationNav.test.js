// import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
// import NavigationNav from '../../components/NavigationNav';
// test('should render component', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<NavigationNav />);
//     // console.log(renderer.getRenderOutput());
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
    
// });
import React from 'react';
import {shallow} from 'enzyme';
// import toJSON from 'enzyme-to-json';
import NavigationNav from '../../components/NavigationNav';
test('should render component', () => {
    const wrapper = shallow(<NavigationNav />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('ul').length).toBe(1);
    
});
