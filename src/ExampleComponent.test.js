import React from "react";
import { configure, mount } from "enzyme";

import Adapter from "enzyme-adapter-react-15.4";
import ExampleComponent from "./ExampleComponent";

configure({ adapter: new Adapter() });

describe("Example Test", () => {
  test("should pass", () => {
    const obj = mount(<ExampleComponent />);
    console.log(obj);
    expect(obj).toBeTruthy();
  });
});
