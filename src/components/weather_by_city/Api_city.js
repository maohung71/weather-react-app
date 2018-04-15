import React, { Component } from 'react';
import FormCity from './Form_city';
import WeatherCity from './Weather_city';

// openweather api key
const API_KEY = "876f71af64d39434b74d05b31a77fc42";

class ApiCity extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeatherCity = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    const country = e.target.elements.country.value;

    const apiCallCity = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);

    const dataCity =  await apiCallCity.json();

    if(city && country){
      console.log(dataCity);

      this.setState({
        temperature: dataCity.main.temp,
        city: dataCity.name,
        country: dataCity.sys.country,
        humidity: dataCity.main.humidity,
        description: dataCity.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a City and Country"
      });
    }

  };

  render(){
    return(
      <div  className="outputByName">
        <FormCity getWeatherCity={this.getWeatherCity}/>
        <WeatherCity
          temperature= {this.state.temperature}
          city= {this.state.city}
          country= {this.state.country}
          humidity= {this.state.humidity}
          description= {this.state.description}
          error= {this.state.error}
        />
      </div>
    );
  }

};

export default ApiCity;
