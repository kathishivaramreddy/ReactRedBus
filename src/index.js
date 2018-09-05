import React from "react";
import ReactDOM from "react-dom";
// import axios from 'axios';
import "./App.css";

class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      data:[],
      busData: { Iravath: [{place: 'Hyderabad-Kolkata',  departureTime: '5:30',  arrivalTime: '12:30', price:'INR700'},
                                 {place: 'Hyderabad-Kolkata',  departureTime: '7:30',  arrivalTime: '14:30', price:'INR700'},
                                 {place: 'Hyderabad-Kolkata',  departureTime: '9:30',  arrivalTime: '16:30', price:'INR700'},
                                 {place: 'Hyderabad-Kolkata',  departureTime: '11:30', arrivalTime: '18:30', price:'INR700'},
                                 {place: 'Hyderabad-Kolkata',  departureTime: '13:30', arrivalTime: '20:30', price:'INR700'},
                                 {place: 'Hyderabad-Kolkata',  departureTime: '15:30', arrivalTime: '22:30', price:'INR700'},
                                 {place: 'Hyderabad-Kolkata',  departureTime: '17:30', arrivalTime: '12:30', price:'INR700'},
                                 {place: 'Hyderabad-Kolkata',  departureTime: '19:30', arrivalTime: '2:30', price:'INR700'},
                                 {place: 'Hyderabad-Kolkata',  departureTime: '21:30', arrivalTime: '4:30', price:'INR700'},
                                 {place: 'Hyderabad-Kolkata',  departureTime: '22:30', arrivalTime: '5:30', price:'INR700'}],

                         Indra:  [ {place: 'Hyderabad-VishakaPatnam',departureTime:'14:30',arrivalTime:'20:30',price:'INR1200'},
                                   {place: 'Hyderabad-VishakaPatnam',departureTime:'15:30',arrivalTime:'21:30',price:'INR1200'},
                                   {place:'Hyderabad-VishakaPatnam',departureTime:'16:30',arrivalTime:'22:30',price:'INR1200'},                                                   {place: 'Hyderabad-VishakaPatnam',departureTime:'17:30',arrivalTime:'23:30',price:'INR1200'},
                                   {place: 'Hyderabad-VishakaPatnam',departureTime:'18:30',arrivalTime:'12:30',price:'INR1200'}],

                         Garuda: [{place: 'Nellore-Vijayawada',departureTime: '17:30',arrivalTime: '21:30',price:'INR600'},
                                   {place: 'Nellore-Vijayawada',departureTime: '18:30',arrivalTime: '22:30',price:'INR600'},
                                    {place: 'Nellore-Vijayawada',departureTime: '19:30',arrivalTime: '23:30',price:'INR600'},
                                   {place: 'Nellore-Vijayawada',departureTime: '20:30',arrivalTime: '12:30',price:'INR600'}],

                         Jabbar: [{place: 'Kurnool-Kakinada',departureTime: '23:30',arrivalTime: '6:30',price:'INR1100'}]

         }
      }
  }

       renderTableRows =  () => {
           var rows = [];
           Object.keys(this.state.busData).forEach((busName, key) => {
              var busData = this.state.busData[busName];
               busData.forEach((obj) => {

            rows.push (
              <tr  className="secondTableRows">
                <td className="secondTableData">{busName}</td>
                <td className="secondTableData">{obj.place}</td>
                <td className="secondTableData">{obj.departureTime}</td>
                <td className="secondTableData">{obj.arrivalTime}</td>
                <td className="secondTableData">{obj.price}</td>
              </tr>
            )

            })

          })
          var tby = null;
             tby = <tbody>
               {rows.map((obj, key) => {
                 return (
                   obj
                 )
               })}
             </tbody>
          return tby;
       }



  componentDidMount(){
    fetch('http://localhost:8080/getBusData').
    then((response) => response.json()).
    then((findresponse) =>
    {
      this.setState({
        data : [findresponse]
      })
    })
  }

  renderFetchedData () {
    return(
  this.state.data.map((dynamicData) =>
    <tr>
      <td>{dynamicData.busName}</td>
      <td>{dynamicData.place}</td>
      <td>{dynamicData.departureTime}</td>
      <td>{dynamicData.arrivalTime}</td>
      <td>{dynamicData.price}</td>
    </tr>
  )
    )
  }

  render(){
    return(
        <div>
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
              <td className="firstTableData">Iravath</td>
              <td className="firstTableData">Hyderabad - Banglore</td>
              <td className="firstTableData">21:30</td>
              <td className="firstTableData">5:45</td>
              <td className="firstTableData">700</td>
            </tr>
          </table>
          <table className="secondTable" border="1">
            <thead>
              <tr className="secondTableRows">
                <th className="secondTableHeader">Bus Name</th>
                <th className="secondTableHeader">From - To</th>
                <th className="secondTableHeader">Departure Time</th>
                <th className="secondTableHeader">Arrival Time</th>
                <th className="secondTableHeader" >Price</th>
              </tr>
            </thead>
            {this.renderTableRows()}
          </table>
          <table border="2">
            <thead>
              <tr className="secondTableRows">
                <th className="secondTableHeader">Bus Name</th>
                <th className="secondTableHeader">From - To</th>
                <th className="secondTableHeader">Departure Time</th>
                <th className="secondTableHeader">Arrival Time</th>
                <th className="secondTableHeader" >Price</th>
              </tr>
            </thead>
            {this.renderFetchedData()}
          </table>
        </div>
            )
      }

            }
ReactDOM.render(
  <App />,
  document.getElementById("root")
);
