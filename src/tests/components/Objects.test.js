import React from 'react';
import {Objects} from '../../components/Objects';
import objects from '../fixtures/objects';
import {shallow} from 'enzyme';
test('should render with no objects passed', () => {
    const wrapper = shallow(<Objects objects={[]}/>);
    expect(wrapper).toMatchSnapshot();  
});
test('should render with objects passed', () => {
    const wrapper = shallow(<Objects objects={objects}/>);
    expect(wrapper).toMatchSnapshot();  
});