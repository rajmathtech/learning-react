import React from "react";
import { shallow } from "enzyme";
import { EditObjectPage } from "../../../components/pages/EditObjectPage";
import objects from "../../fixtures/objects";
let editObjectSpy, historySpy, wrapper;
beforeEach(() => {
  editObjectSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(
    <EditObjectPage 
    object= {objects[1]} 
    editObject={editObjectSpy} 
    history={historySpy} />);
});
test("should render Edit object page component", () => {
  expect(wrapper).toMatchSnapshot();
});
test("should render Edit object page component with object", () => {
    wrapper.find('ObjectForm').prop('onSubmitForm')(objects[1]);
    expect(editObjectSpy).toHaveBeenLastCalledWith(objects[1], objects[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
});