import React, { useContext } from "react";
import "./BookingForm.css";
import { InfoContext } from "../../store/Booking-Info";
import axios from "axios";

const BookingForm = () => {
  const Info = useContext(InfoContext);

  function handleClick1(obj) {

    const {
      id,
      carrerCode,
      flight_code,
      flight_name,
      stops,
      cabinType,
      baggage,
      currency,
      departureAirport,
      arrivalAirport,
    } = obj;

    const { time: time1 } = departureAirport;
    const { time: time2 } = arrivalAirport;

    const { from, to, date, type, adult,child } = Info.details;
    const email = JSON.parse(localStorage.getItem("email"));

    const data = {
      email: email,
      from: from,
      to: to,
      date: date,
      adult: adult,
      child:child,
      type: type,
      id: id,
      carrerCode: carrerCode,
      flight_code: flight_code,
      flight_name: flight_name,
      stops: stops,
      cabinType: cabinType,
      currency: currency,
      departureTime: time1,
      arrivalTime: time2,
    };

    axios.post('http://localhost:5000/addOffer',data)
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
    console.log("click 4");


  }

  function handleMap(obj) {
    const {
      id,
      carrerCode,
      flight_code,
      flight_name,
      stops,
      cabinType,
      baggage,
      currency,
      departureAirport,
      arrivalAirport,
      path,
      durationstopSummary,
      totals,
    } = obj;

    const { time: time1 } = departureAirport;
    const { time: time2 } = arrivalAirport;

    const {
      currency: currency1,
      baggage: baggage1,
      penalty,
      total,
      tax,
      base,
    } = totals;

    return (
      <div className="Ticket-class">
        <li id="li4">
          <label>Flight_Name:</label>
          {flight_name}
        </li>
        <li>
          <label htmlFor="">Departure_Time:</label>
          {time1}
        </li>
        <li>
          <label htmlFor="">Arrival_Time:</label>
          {time2}
        </li>
        <li>
          <label htmlFor="">Number_Of_Stops:</label>
          {stops}
        </li>
        <div className="Price-class">
          <li>
            <label htmlFor="">Total_Price</label>Rs. {total}
          </li>
          <li>
            <label htmlFor="">Tax_Price:</label>Rs. {tax}
          </li>
          <li>
            <label htmlFor="">Base_price:</label>Rs. {base}
          </li>
        </div>
        <button className="butt" onClick={()=>handleClick1(obj)}>Book</button>
      </div>
    );
  }
  return (
    <div className="container1">
      <div className="grid-1">{Info.arr.map(handleMap)}</div>
      {/* <div className="grid-2">{Info.arr1.map(handleMap1)}</div> */}
    </div>
  );
};

export default BookingForm;
