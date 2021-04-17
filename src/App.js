//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Covid from './component/Covid';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      name: "name",
      data: {}
//      "Confirmed","Recovered","Hospitalized","Deaths"
    }

  }

  componentDidMount() {
    console.log("DidMount");
    var self = this;
    axios.get("https://covid19.th-stat.com/api/open/today").then(function (response) {
    console.log(response.data);
    self.setState({ data: response.data });
  },
  function(error) {
    console.log(error);
  })
}
render() {
  console.log("render");
  return (
    <div className="App">
      <header className="App-header">
        <Covid data={this.state.data} />
          {/* name={this.state.name} */}

      </header>
    </div>
  );
}
}


export default App;