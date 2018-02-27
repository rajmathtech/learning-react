import React from "react";
import { shallow } from "enzyme";
import { CreateObjectPage } from "../../../components/pages/CreateObjectPage";
import objects from "../../fixtures/objects";
let addObjectSpy, historySpy, wrapper;
beforeEach(() => {
  addObjectSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(
    <CreateObjectPage startAddObject={addObjectSpy} history={historySpy} />
  );
});
test("shoukd render create object page component", () => {
  expect(wrapper).toMatchSnapshot();
});
test("shoukd render create object page component with object one", () => {
  wrapper.find("ObjectForm").prop("onSubmitForm")(objects[0]);
  expect(addObjectSpy).toHaveBeenLastCalledWith(objects[0]);
  expect(historySpy.push).toHaveBeenLastCalledWith("/");
});
