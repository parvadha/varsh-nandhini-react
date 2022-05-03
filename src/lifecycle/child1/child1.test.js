import React from "react";
import { shallow } from "enzyme";
import Child1 from "./child1";

describe("Child1", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Child1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
