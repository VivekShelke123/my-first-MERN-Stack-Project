import React, { useEffect, useState } from "react";
import "./MyPlans.css";
import axios from "axios";

const MyPlans = () => {
  const [dbarr, setDbarr] = useState([]);

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));

    axios
      .get(`http://localhost:5000/getOffer/${email}`)
      .then((res) => {
        const { data } = res.data;
        setDbarr(data);
        console.log(email);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  function handleMap(obj) {
    const {
      _id,
      email,
      from,
      to,
      date,
      adult,
      child,
      type,
      id,
      carrerCode,
      flight_code,
      flight_name,
      stops,
      cabinType,
      currency,
      departureTime,
      arrivalTime,
    } = obj;

    return (
      <div>
        <table className="Ticket-table">
          <tr>
            <td className="tic-label">Flight_Id </td>
            <td>:</td>
            <td>{id}</td>
          </tr>
          <tr>
            <td className="tic-label">Fligth_Name</td>
            <td>:</td>
            <td>{flight_name}</td>
          </tr>
          <tr>
            <td className="tic-label">From</td>
            <td>:</td>
            <td>{from}</td>

            <td className="tic-label">Destination</td>
            <td>:</td>
            <td>{to}</td>
          </tr>
          <tr>
            <td className="tic-label">Adult</td>
            <td>:</td>
            <td>{adult}</td>

            <td className="tic-label">Children</td>
            <td>:</td>
            <td>{child}</td>
          </tr>
          <tr>
            <td className="tic-label">Date</td>
            <td>:</td>
            <td>{date}</td>
          </tr>
          <tr>
            <td className="tic-label">Departure_Time</td>
            <td>:</td>
            <td>{departureTime}</td>

            <td className="tic-label">Arrival_Time</td>
            <td>:</td>
            <td>{arrivalTime}</td>
          </tr>
          <tr>
            <td className="tic-label">Cabin_Type</td>
            <td>:</td>
            <td>{cabinType}</td>

            <td className="tic-label">Stops</td>
            <td>:</td>
            <td>{stops}</td>
          </tr>
        </table>
      </div>
    );
  }

  return <div>{dbarr.map(handleMap)}</div>;
};

export default MyPlans;
