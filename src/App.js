import React, { Component} from "react";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h2>Red Bus</h2>
        <table className ="firstTable" border="1">
          <tr className="firstTableRows">
            <th className = 'firstTableHeadings'>Bus Name</th>
            <th className = 'firstTableHeadings'>From - To</th>
            <th className = 'firstTableHeadings'>Departure Time</th>
            <th className = 'firstTableHeadings'>Arrival Time</th>
            <th className = 'firstTableHeadings'>Price</th>
          </tr>
          <tr className="firstTableRows">
            <td className="firstTableData">Iravath Travels</td>
            <td className="firstTableData">Hyderabad - Banglore</td>
            <td className="firstTableData">21:30</td>
            <td className="firstTableData">5:45</td>
            <td className="firstTableData">700</td>
          </tr>
        </table>

        <br></br>

        <table className="secondTable" border="1">
          <tr className = "secondTableRows">
            <th className="secondTableHeadings">Bus Name</th>
            <th className="secondTableHeadings">From - To</th>
            <th className="secondTableHeadings">Departure Time</th>
            <th className="secondTableHeadings">Arrival Time</th>
            <th className="secondTableHeadings">Price</th>
          </tr>
          <tr className = "secondTableRows"></tr>
          <tr className = "secondTableRows"></tr>
          <tr className = "secondTableRows"></tr>
          <tr className = "secondTableRows"></tr>
          <tr className = "secondTableRows"></tr>
          <tr className = "secondTableRows"></tr>
          <tr className = "secondTableRows"></tr>
          <tr className = "secondTableRows"></tr>
          <tr className = "secondTableRows"></tr>
          <tr className = "secondTableRows"></tr>
        </table>
      </div>
    );
  }
}

export default App;
