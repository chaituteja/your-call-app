import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { shallow } from "enzyme";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

it("test API call", async () => {
  const response = {
    data: {
      current: {
        temp_c: 15,
        condition: {
          text: "Heavy rain",
          icon: "icon.png",
        },
      },
      forecast: {
        forecastday: [
          {
            date: "2021-03-17",
            day: {
              mintemp_c: 10,
              maxtemp_c: 20,
            },
          },
          {
            date: "2021-03-18",
            day: {
              avgtemp_c: 18,
              condition: {
                text: "clouds",
                icon: "clouds.png",
              },
            },
          },
        ],
      },
    },
  };

  mockedAxios.get.mockImplementationOnce(() => Promise.resolve(response));
  const wrapper = shallow(<App />, { disableLifecycleMethods: true });
  await wrapper.instance().getWeather();
  expect(wrapper.state().temp).toEqual(15);
  expect(wrapper.state().description).toEqual("Heavy rain");
  expect(wrapper.state().icon).toEqual("icon.png");
  expect(wrapper.state().date).toEqual("2021-03-17");
  expect(wrapper.state().minTemp).toEqual(10);
  expect(wrapper.state().maxTemp).toEqual(20);
  expect(wrapper.state().forecastTemp).toEqual(18);
  expect(wrapper.state().forecastDescription).toEqual("clouds");
  expect(wrapper.state().forecastIcon).toEqual("clouds.png");
  expect(wrapper.state().forecastdate).toEqual("2021-03-18");
});
