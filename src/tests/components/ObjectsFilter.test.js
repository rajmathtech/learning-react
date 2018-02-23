import React from "react";
import { shallow } from "enzyme";
import {ObjectsFilter} from "../../components/ObjectsFilter";
import {filterTest, altFilter } from "../fixtures/filters";
import moment from 'moment';
let wrapper, setText, setStartDate, setEndDate, setSortBy;
beforeEach(() => {
  setText = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  setSortBy = jest.fn();
  wrapper = shallow(
    <ObjectsFilter
      filter={filterTest}
      setText={setText}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      setSortBy={setSortBy}
    />
  );
});
test("should render with default filters", () => {
    expect(wrapper).toMatchSnapshot();
});
test("should render with alt filters", () => {
    wrapper.setProps({filter:altFilter});
    expect(wrapper).toMatchSnapshot();
});

//onChangeText
test("should set text on change", () => {
  const value = 'rent';
  wrapper.find('input').simulate('change', {target:{value}});
  expect(setText).toHaveBeenLastCalledWith(value);
});
//onDatesChange
test("should set dates on change", () => {
  const startDate = moment();
  const endDate = moment().add(4,'days');
  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});
//onFocusChange 
test("should set focused on change", () => {
  const focused = 'startDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(focused);
  expect(wrapper.state('focused')).toBe(focused);;
});
//setSortBy ->date ->amount
test("should set sortby date on change", () => {
  const value = 'date';
  wrapper.find('select').simulate('change', {target:{value}});
  expect(setSortBy).toHaveBeenLastCalledWith(value);
});
test("should set sortby amount on change", () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {target:{value}});
  expect(setSortBy).toHaveBeenLastCalledWith(value);
});