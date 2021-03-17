import React from "react";
import axios from "axios";
import Button from "./Components/Button";
import Card from "./Components/Card";
import "./App.css";

const KEY: string = "e1a374805b4b494aaab60038211603";

class App extends React.Component {
  state = {
    temp: "",
    description: "",
    icon: "",
    date: "",
    minTemp: "",
    maxTemp: "",
    forecastTemp: "",
    forecastDescription: "",
    forecastIcon: "",
    forecastdate: "",
    term: "Melbourne",
    active: false,
  };

  componentDidMount() {
    this.getWeather();
  }

  getWeather = async () => {
    const response = await axios.get(
      "http://api.weatherapi.com/v1/forecast.json",
      {
        params: {
          q: this.state.term,
          key: KEY,
          days: 2,
        },
      }
    );

    this.setState({
      temp: response.data.current.temp_c,
      icon: response.data.current.condition.icon,
      description: response.data.current.condition.text,
      date: response.data.forecast.forecastday[0].date,
      minTemp: response.data.forecast.forecastday[0].day.mintemp_c,
      maxTemp: response.data.forecast.forecastday[0].day.maxtemp_c,
      forecastTemp: response.data.forecast.forecastday[1].day.avgtemp_c,
      forecastDescription:
        response.data.forecast.forecastday[1].day.condition.text,
      forecastIcon: response.data.forecast.forecastday[1].day.condition.icon,
      forecastdate: response.data.forecast.forecastday[1].date,
    });
  };

  changeLocation = (event: any) => {
    this.setState(
      { term: event.target.value, active: event.target.value },
      () => {
        this.getWeather();
      }
    );
  };

  renderContent() {
    if (this.state.forecastTemp) {
      return (
        <div className="App">
          <div className="button-wrapper">
            <Button
              onClick={this.changeLocation}
              value="Melbourne"
              active={this.state.term === "Melbourne" ? true : false}
            >
              Melbourne
            </Button>
            <span className="divider"></span>
            <Button
              onClick={this.changeLocation}
              value="Sydney"
              active={this.state.term === "Sydney" ? true : false}
            >
              Sydney
            </Button>
            <span className="divider"></span>
            <Button
              onClick={this.changeLocation}
              value="Brisbane"
              active={this.state.term === "Brisbane" ? true : false}
            >
              Brisbane
            </Button>
          </div>

          <Card
            temp={this.state.temp}
            description={this.state.description}
            icon={this.state.icon}
            date={this.state.date}
            minTemp={this.state.minTemp}
            maxTemp={this.state.maxTemp}
            forecastTemp={this.state.forecastTemp}
            forecastDescription={this.state.forecastDescription}
            forecastIcon={this.state.forecastIcon}
            forecastdate={this.state.forecastdate}
          />
        </div>
      );
    }

    return <p className="loading">Loading...</p>;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
