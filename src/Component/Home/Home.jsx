import { Card } from "@mui/material";
import React, { useState } from "react";
import Video from "../Video/Video";
import Mapp from "../Map/Mapp";
import Cards from "../Cards/Cards";
import Info from "../Info/Info";
import Main from "../HelpLink/Main/Main";
import Form1 from "../HomeForm/Form1";
import "./Home.css";

const Home = (props) => {
  return (
    <div>
      <div className="form-class">{props.log === true ? <Form1 /> : null}</div>
      <div className="Video">
        <Video />
      </div>

      <div>
        <Mapp />
      </div>

      <div>
        <Cards />
      </div>

      <div>
        <Info />
      </div>

      <div>
        <Main />
      </div>
    </div>
  );
};

export default Home;
