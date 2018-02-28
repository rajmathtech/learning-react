import React from "react";
import { shallow } from "enzyme";
import { EditObjectPage } from "../../../components/pages/EditObjectPage";
import objects from "../../fixtures/objects";
let startEditObjectSpy, historySpy, wrapper;
beforeEach(() => {
  startEditObjectSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(
    <EditObjectPage 
    object= {objects[1]} 
    startEditObject={startEditObjectSpy} 
    history={historySpy} />);
});
test("should render Edit object page component", () => {
  expect(wrapper).toMatchSnapshot();
});
test("should render Edit object page component with object", () => {
    wrapper.find('ObjectForm').prop('onSubmitForm')(objects[1]);
    expect(startEditObjectSpy).toHaveBeenLastCalledWith(objects[1].id, objects[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
});