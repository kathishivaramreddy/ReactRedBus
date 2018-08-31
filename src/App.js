import React, { Component} from "react";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h2>Red Bus</h2>
        <table className ="firstTable" border="1">
          <tr className="firstTableRows">
            <th>Bus Name</th>
            <th>From - To</th>
            <th>Departure Time</th>
            <th>Arrival Time</th>
            <th>Price</th>
          </tr>
          <tr className="firstTableRows">
            <td>Iravath Travels</td>
            <td>Hyderabad - Banglore</td>
            <td>21:30</td>
            <td>5:45</td>
            <td>700</td>
          </tr>
        </table>

        <br></br>

        <table className="secondTable" border="1">
        </table>
      </div>
    );
  }
}

export default App;
