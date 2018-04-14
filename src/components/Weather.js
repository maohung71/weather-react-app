import React from 'react';

// class Weather extends Component{
//   render(){
//     return(
//       <div>
//         {this.props.zip && <p>Location: {this.props.zip}</p>}
//         {this.props.temperature && <p>Temp: {this.props.temperature}</p>}
//         {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
//         {this.props.description && <p>Description: {this.props.description}</p>}
//         {this.props.error  && <p>{this.props.error}</p>}
//       </div>
//     );
//   }
// }

// stateless Component
const Weather = (props) => (
  <div>
    {props.zip && <p>Location: {props.zip}</p>}
    {props.temperature && <p>Temp: {props.temperature}</p>}
    {props.humidity && <p>Humidity: {props.humidity}</p>}
    {props.description && <p>Description: {props.description}</p>}
    {props.error  && <p>{props.error}</p>}
  </div>
);

export default Weather;
