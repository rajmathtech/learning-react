import React from 'react';
import {shallow} from 'enzyme';
import ObjectsPage from '../../../components/pages/ObjectsPage';
test('should render objects component', () => {
    const wrapper = shallow(<ObjectsPage />);
    expect(wrapper).toMatchSnapshot();   
});