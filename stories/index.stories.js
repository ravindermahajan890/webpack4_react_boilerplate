import React from "react";

import { storiesOf, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
addDecorator(withInfo({ source: true }));
import Home from "../src/components/Demo/Demo";
storiesOf("Demo", module).add("demo component", () => <Home name="Jane Doe" />);
