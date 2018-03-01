import React from 'react';
import {shallow} from 'enzyme';
import {NavigationNav} from '../../components/NavigationNav';
test('should render component', () => {
    const wrapper = shallow(<NavigationNav startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('ul').length).toBe(1);
    
});
test('should call startLogout spy', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<NavigationNav startLogout={startLogout}/>);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
