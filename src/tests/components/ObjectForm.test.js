import React from 'react';
import {shallow} from 'enzyme';
import objects from '../fixtures/objects';
import ObjectForm from '../../components/ObjectForm';
import moment from 'moment';
test('should render component with default', () => {
    const wrapper = shallow(<ObjectForm object={{}} />);
    expect(wrapper).toMatchSnapshot();   
});
test('should render component with object 2', () => {
    const wrapper = shallow(<ObjectForm object={objects[1]} />);
    expect(wrapper).toMatchSnapshot();   
});
test('should set error on invalid form submission', () => {
    const wrapper = shallow(<ObjectForm object={{}} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state('error').length).toBeGreaterThan(0);
});
test('should set title on change title', () => {
    const value = 'my title';
    const wrapper = shallow(<ObjectForm object={{}} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(0).simulate('change', {target:{value}});
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state('title')).toBe(value);
});
test('should set details on change details', () => {
    const value = 'my details';
    const wrapper = shallow(<ObjectForm object={{}} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').simulate('change', {target:{value}});
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state('details')).toBe(value);
});
test('should not set amount on invalid amount', () => {
    const value = '12.911';
    const wrapper = shallow(<ObjectForm object={{}} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {target:{value}});
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state('amount')).toBe('');
});
test('should set amount on valid amount', () => {
    const value = '12.91';
    const wrapper = shallow(<ObjectForm object={{}} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {target:{value}});
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state('amount')).toBe(value);
});
test('should set object on submit', () => {
    const onSubmitFormSpy = jest.fn();
    const wrapper = shallow(<ObjectForm object={objects[0]} onSubmitForm={onSubmitFormSpy}/>);
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    expect(onSubmitFormSpy).toHaveBeenLastCalledWith(
        {
            title: objects[0].title,
            details:objects[0].details ,
            createdAt:objects[0].createdAt ,
            amount: objects[0].amount,
            error: "",
            focused: false
        }
    );
});
test('should set date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ObjectForm object={{}} />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toBe(now);
});
test('should set date on focus change', () => {
    const focused = true;
    const wrapper = shallow(<ObjectForm object={{}} />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('focused')).toBe(true);
});