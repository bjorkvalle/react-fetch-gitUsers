import React, { Component, PropTypes } from 'react';

class Form extends Component {
   constructor() {
      super();

      this.state = {
         value: 'Hello!'
      }
   }

   handleChange(event) {
      this.setState({ 
         value: event.target.value 
      });
   }

   render() {
      return (
         <div>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
         </div>
      );
   }
}

Form.propTypes = {
   onChange: PropTypes.func.isRequired
};

export default Form;