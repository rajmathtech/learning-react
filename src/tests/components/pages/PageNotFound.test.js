import React from 'react';
import {shallow} from 'enzyme';
import PageNotFound from '../../../components/pages/PageNotFound';
test('should render component', () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper).toMatchSnapshot();   
});