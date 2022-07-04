import React from "react";
import { shallow } from "enzyme";
// import { render, screen } from '@testing-library/react';

import App from "./App";
import Player from "./Player";

// test("should render the App correctly", () => {
//   const component = shallow(<App />);
//   expect(component).toMatchSnapshot();
// });

test("Story 1", () => {
  const component = shallow(<App />);
  
  let player = component.find(Player).first();
  player.props().onSelect();
  let heading = component.find('.heading2').first();

  expect(heading.childAt(3).text()).toBe("1")

  component.update();

  player = component.find(Player).first();
  player.props().onSelect();
  player.props().onSelect();
  heading = component.find('.heading2').first();
  expect(heading.childAt(3).text()).toBe("0")
});

test("Story 2", () => {
  const component = shallow(<App />);
  let selectAllButton = component.find('.button.button--link').at(1)

  selectAllButton.props().onClick();

  let heading = component.find('.heading2').first();
  expect(heading.childAt(3).text()).toBe(component.find(Player).length.toString())

  let unSelectAllButton = component.find('.button.button--link').at(2)

  unSelectAllButton.props().onClick();

  heading = component.find('.heading2').first();
  expect(heading.childAt(3).text()).toBe("0")
});

test("Story 3", () => {
  const component = shallow(<App />);
  // TODO
});
