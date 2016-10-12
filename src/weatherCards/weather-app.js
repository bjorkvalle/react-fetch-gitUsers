import React, { Component } from 'react';
import Form from './form';
import Card from './card';

class WeatherApp extends Component {
   constructor() {
      super();
      this.apiKey = "203db91b6ef9161c9705dd8f525dfb11";
      this.city = "London";
      this.state = {
         weatherData: null,
         weatherIconUrl: "http://openweathermap.org/img/w/"
      }
   }

   loadWeather() {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=metric`)
         .then(response => {
            return response.json();
         })
         .then(data => {
            this.setState({
               weatherData: data,
               weatherIconUrl: `${this.state.weatherIconUrl}${data.weather[0].icon}.png`
            });
         })
         .catch(error => {
            console.log(error);
         });
   }

   componentDidMount() {
      this.loadWeather();  
   }

   render() {
      if (!this.state.weatherData) {
         return (
            <div>
               <Form onChange />
               <div>Loading...</div>;
         </div>
         )
      } else {
         return (
            <div>
               <Form onChange />
               <Card data={this.state.weatherData} icon={this.state.weatherIconUrl} />
            </div>
         )
      }
   }
}

export default WeatherApp;