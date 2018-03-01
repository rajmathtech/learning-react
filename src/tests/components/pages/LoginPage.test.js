import React from 'react';
import {shallow} from 'enzyme';
import {LoginPage} from '../../../components/pages/LoginPage';
test('should render Login page component', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});
test('should call startLogin spy', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});