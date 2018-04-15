import React from 'react';

const FormCity = (props) => (
  <form onSubmit ={props.getWeatherCity}>
    <input text ="input" name ="city" placeholder ="Enter City..."/>
    <input text ="input" name ="country" placeholder ="Enter Country..." />
    <button>Get Weather</button>
  </form>
)



// class FormCity extends Component {
//
//   render(){
//     return(
//       <form onSubmit ={this.props.getWeatherCity}>
//         <input text ="input" name ="city" placeholder ="Enter City..."/>
//         <input text ="input" name ="country" placeholder ="Enter Country..." />
//         <button>Get Weather</button>
//       </form>
//     );
//   }
// }

export default FormCity;
