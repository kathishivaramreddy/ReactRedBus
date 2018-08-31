import React, { Component} from "react";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h2>Red Bus</h2>
        <table border="1">
          <tr>
            <th>Bus Name</th>
            <th>From - To</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Price</th>
          </tr>
          <td>Iravath Travels</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <tr>
          </tr>
        </table>
      </div>
    );
  }
}

export default App;
