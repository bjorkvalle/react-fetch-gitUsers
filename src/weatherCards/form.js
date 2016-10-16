import React, { Component } from 'react';

class Form extends Component {
   constructor() {
      super();

      this.state = {
         city: ''
      }
   }

   handleCityChange = (event) => {
      this.setState({
         city: event.target.value
      });
   }

   handleSubmit = (e) => {
      e.preventDefault();
      let city = this.state.city.trim(); // trim() removes whitespace
      if (!city) {
         return;
      }
      // TODO: send request to the server
      this.props.onFormSubmit(city);
      this.setState({ city: '' }); // clear after submit
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <input
               type="text"
               placeholder='City to Look Up'
               value={this.state.city}
               onChange={this.handleCityChange} />
            <input type="submit" value="Post" />
         </form>
      );
   }
}

export default Form;