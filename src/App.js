import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./Component/Register/Register";
import Login from "./Component/Register/Login";
import About from "./Component/AboutUs/About";
import Navbar1 from "./Component/Navbar/Navbar1";
import NewNavbar from "./Component/Navbar/NewNavbar";
import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";
import Firstp from "./Component/HelpLink/Helplink1/Firstp";
import Help from "./Component/HelpLink/Helplink2/Help";
import Learn from "./Component/Car/Learn";
import Credits from "./Component/shop/Credits";
import Deal from "./Component/Deals/Deal";
import Offers from "./Component/Offers/Offers";
import Profile from "./Component/Accounts/Profile";
import Accounts from "./Component/Accounts/Accounts";
import BookingForm from "./Component/BookingForm/BookingForm";
import MyPlans from "./Component/MyPlans/MyPlans";
import { InfoContext } from "./store/Booking-Info";


const App = () => {
  const [log, setLog] = useState();
  const [arr,setArr] = useState([]);
  const [details,setDetails] = useState([]);
  useEffect(() => {
    const dem = JSON.parse(localStorage.getItem("Logged"));
    setLog(dem);
  },[]);

  return (
    <>
      <InfoContext.Provider value={{arr:arr,setArr:setArr,details:details,setDetails:setDetails}}>
        <div className="nav-class">
          {" "}
          {log === true ? <NewNavbar setLog={setLog} /> : <Navbar1 />}
        </div>

        <Routes>
          <Route path="/" element={<Home log ={log}/>} />
          <Route path="/BookingForm" element={<BookingForm />} />
          <Route path="/myPlans" element={<MyPlans />} />
          <Route path="/Sign" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Helplink1" element={<Firstp />} />
          <Route path="/Helplink2" element={<Help />} />
          <Route path="/Learn" element={<Learn />} />
          <Route path="/Use" element={<Credits />} />
          <Route path="/Shop" element={<Deal />} />
          <Route path="/Deals" element={<Offers />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Accounts" element={<Accounts />} />
        </Routes>

        <Footer />
      </InfoContext.Provider>
    </>
  );
};

export default App;
