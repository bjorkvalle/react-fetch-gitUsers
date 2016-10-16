import React, { Component } from 'react';
import Form from './form';
import Card from './card';

class WeatherApp extends Component {
   constructor() {
      super();
      this.apiKey = "203db91b6ef9161c9705dd8f525dfb11";
      this.city = null;
      this.weatherIconUrl = "http://openweathermap.org/img/w/";

      this.state = {
         weatherData: null,
         weatherIcon: null
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
               weatherIcon: `${this.weatherIconUrl}${data.weather[0].icon}.png`
            });
         })
         .catch(error => {
            console.log(error);
         });
   }

   handleFormSubmit = (newCity) => {
      this.city = newCity;
      this.loadWeather();
   }

   render() {

      if (!this.state.weatherData) {
         if (this.city != null) {
            return (
               <div>
                  <Form onFormSubmit={this.handleFormSubmit} />
                  <div>Loading...</div>;
               </div>
            )
         } else {
            return (
               <div>
                  <Form onFormSubmit={this.handleFormSubmit} />
               </div>
            )
         }
      } else {
         return (
            <div>
               <Form onFormSubmit={this.handleFormSubmit} />
               <Card data={this.state.weatherData} icon={this.state.weatherIcon} />
            </div>
         )
      }
   }
}

export default WeatherApp;