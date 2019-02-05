import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("render without error", () => {
  const wrapper = shallow(<App />);
  const Appcontent = wrapper.find("[data-test='component-app']");
  expect(Appcontent.length).toBe(1);
});

test("render increase button", () => {
  const wrapper = shallow(<App />);
  const increaseButton = wrapper.find("[data-test='increase-button']");
  expect(increaseButton.length).toBe(1);
});

test("render counter display", () => {
  const wrapper = shallow(<App />);
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});

test("should counter start at 0", () => {});

test("increase counter when you push the button", () => {});
