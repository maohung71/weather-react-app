import React from 'react';

const WeatherCity = (props) => (
  <div>
    {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
    {props.temperature && <p>temperature: {props.temperature}</p>}
    {props.humidity && <p>humidity: {props.humidity}</p>}
    {props.description && <p>description: {props.description}</p>}
    {props.error && <p>{props.error}</p>}
  </div>
)

// class WeatherCity extends Component{
//
//   render(){
//     return(
//       <div>
//         {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
//         {this.props.temperature && <p>temperature: {this.props.temperature}</p>}
//         {this.props.humidity && <p>humidity: {this.props.humidity}</p>}
//         {this.props.description && <p>description: {this.props.description}</p>}
//         {this.props.error && <p>{this.props.error}</p>}
//       </div>
//     );
//   }
//
// }

export default WeatherCity;
