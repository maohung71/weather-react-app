import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

// openweather api key
const API_KEY = "876f71af64d39434b74d05b31a77fc42";

//  5day forecast          http://api.openweathermap.org/data/2.5/forecast?zip=94040,us


class App extends Component {
  state = {
    temperature: undefined,
    zip: undefined,
    humidity: undefined,
    description: undefined,
    eror: undefined
  }

  // function making axios call
  getWeather = async (e) => {
    e.preventDefault();
    const zip = e.target.elements.zipcode.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}&units=imperial`);

    const data = await api_call.json();

    if(zip){
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        zip: data.name,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }else{
      this.setState({
        temperature: undefined,
        zip: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a zipcode"
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather
          temperature= {this.state.temperature}
          zip= {this.state.zip}
          humidity= {this.state.humidity}
          description= {this.state.description}
          error= {this.state.error}
        />
      </div>
    );
  }
};

export default App;
