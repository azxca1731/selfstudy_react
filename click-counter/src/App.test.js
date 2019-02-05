import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create shallow wrapper <App />
 * @function setup
 * @param {object} props
 * @param {any} state
 * @returns {ShalloWrapper}
 */
const setup = (props = {}, state = null) => {
  return shallow(<App {...props} />);
};

/**
 * Factory function to search attribute for wrapper
 * @function findByTestAttr
 * @param {*} wrapper
 * @param {*} val
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("render without error", () => {
  const wrapper = setup();
  const Appcontent = findByTestAttr(wrapper, "component-app");
  expect(Appcontent.length).toBe(1);
});

test("render increase button", () => {
  const wrapper = setup();
  const increaseButton = findByTestAttr(wrapper, "increase-button");
  expect(increaseButton.length).toBe(1);
});

test("render counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("should counter start at 0", () => {
  const wrapper = setup();
  const initailCounterState = wrapper.state("counter");
  expect(initailCounterState).toBe(0);
});

test("increase counter when you push the button", () => {});
