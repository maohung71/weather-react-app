import React, { Component } from 'react';

// class Form extends Component{
//   render(){
//     return(
//         <form onSubmit ={this.props.getWeather}>
//           <input type="text" name="zipcode" placeholder="Enter A Zipcode..." />
//           <button> Get Weather </button>
//         </form>
//     );
//   }
// }


const Form = (props) => (
  <form onSubmit ={props.getWeather}>
    <input type="text" name="zipcode" placeholder="Enter A Zipcode..." />
    <button> Get Weather </button>
  </form>
);

export default Form;
