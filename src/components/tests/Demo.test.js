import React from "react";
import renderer from "react-test-renderer";
import Home from "../Demo";

it("renders correctly", () => {
  const tree = renderer.create(<Home name="Ravinder" />).toJSON();
  expect(tree).toMatchSnapshot();
});
