import React from "react";

import { render, fireEvent } from "react-testing-library";
import Example from "../Example/Example";

test("asda", () => {
  const { container, asFragment } = render(<Example />);
  const firstChild = container.firstChild;
  expect(asFragment()).toMatchSnapshot();
  expect(firstChild.firstChild.textContent).toBe("You clicked 0 times");
  const btn = container.querySelector("button");
  fireEvent.click(btn);
  expect(firstChild.firstChild.textContent).toBe("You clicked 1 times");
});
