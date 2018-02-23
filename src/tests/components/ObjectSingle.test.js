import React from 'react';
import {shallow} from 'enzyme';
import objects from '../fixtures/objects';
import ObjectSingle from '../../components/ObjectSingle';
test('should render component', () => {
    const wrapper = shallow(<ObjectSingle object={objects[1]}/>);
    expect(wrapper).toMatchSnapshot();   
});