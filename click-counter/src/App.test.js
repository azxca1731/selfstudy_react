import React from "react";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("render without error", () => {});

test("render counter button", () => {});

test("render counter display", () => {});

test("should counter start at 0", () => {});

test("increase counter when you push the button", () => {});
