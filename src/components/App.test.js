import React from "react";
import { shallow } from "enzyme";
// import { render, screen } from '@testing-library/react';

import App from "./App";

test("should render the App correctly", () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});

test("Story 1", () => {
  const component = shallow(<App />);
  // TODO
});

test("Story 2", () => {
  const component = shallow(<App />);
  // TODO
});

test("Story 3", () => {
  const component = shallow(<App />);
  // TODO
});
