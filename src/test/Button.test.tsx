import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "../Components/Button";
import "jest-styled-components";
import { shallow } from "enzyme";

it("Should have correct background color - Normal state", () => {
  let wrapper = shallow(<Button active={false}> </Button>);
  expect(wrapper).toHaveStyleRule("color", "black");
});

it("Should have correct background color - Active state", () => {
  let wrapper = shallow(<Button active={true}> </Button>);
  expect(wrapper).toHaveStyleRule("color", "white");
});
