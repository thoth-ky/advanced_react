import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = { 
    name: "Kyalo"
   };

  asyncFunction = () => {
    return Promise.resolve('Thoth')
  }

  async componentDidMount() {
    this.setState({
      name: await this.asyncFunction()
    });
  }

  render() { 
    return ( 
      <h2>Hello React, from { this.state.name }</h2>
     );
  }
}
 
export default App;

ReactDOM.render(<App/>, document.getElementById("root"))