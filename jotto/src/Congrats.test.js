import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findByTestAttr } from "../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("Congrats", () => {
  test("renders without crashing", () => {
    const wrapper = shallow(<Congrats />);
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.length).toBe(1);
  });

  test("renders no text when `success` prop is false", () => {
    const wrapper = shallow(<Congrats />);
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.text().length).toBe(0);
  });

  test("renders non-empty congrats message when succes prop is true", () => {
    const wrapper = shallow(<Congrats success />);
    const message = findByTestAttr(wrapper, "congrats-message");
    expect(message.text().length).toBeGreaterThan(0);
  });
});
