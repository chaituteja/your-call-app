import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../Components/Card";
import "jest-styled-components";
import { mount } from "enzyme";

it("Should render correctly", () => {
  let wrapper = mount(
    <Card
      temp="15"
      description="clouds"
      icon="icons.png"
      date="2021-03-17"
      minTemp="10"
      maxTemp="25"
      forecastTemp="22"
      forecastDescription="Heavy Rain"
      forecastIcon="clouds.png"
      forecastdate="2021-03-18"
    />
  );

  expect(wrapper.find("h1").text()).toContain("15");
  expect(wrapper.find("h2")).toHaveLength(3);
  expect(wrapper.find("img")).toHaveLength(2);
  expect(wrapper.find("img").at(0).props()["src"]).toEqual("http://icons.png");
  expect(wrapper.find("img").at(1).props()["src"]).toEqual("http://clouds.png");
});
