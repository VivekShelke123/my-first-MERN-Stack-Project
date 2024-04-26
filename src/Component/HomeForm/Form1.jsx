import React, { useContext } from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Form1.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TextField from "@mui/material/TextField";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InfoContext } from "../../store/Booking-Info";

const Form1 = () => {
  const navigate = useNavigate();
  const Info = useContext(InfoContext);

  const [key, setKey] = useState("home");
  const [children,setChildren] = useState(0);
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [datte, setdatte] = useState("");
  const [adult, setadult] = useState(0);
  const [type, settype] = useState("");

  function handleFirstSubmit(e) {
    e.preventDefault();

    const options = {
      params: {
        from:from,
        to:to,
        date:datte,
        adult:adult,
        child:children,
        type:type,
        currency: "INR",
      },
      headers: {
        'X-RapidAPI-Key': 'e5cd495f55mshdf2eb85f00466b6p12d192jsn51e89a7f2dba',
        'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
      }
    };
    axios
      .get('https://flight-fare-search.p.rapidapi.com/v2/flights/', options)
      .then((res) => {
        const { status, searchData, results } = res.data;
        Info.setArr(results);
        Info.setDetails(searchData);
      })
      .catch((err) => {
        console.log(err);
      });


    navigate("/BookingForm");
  }

  return (
    <Container className="form-container">
      <Row>
        <Col lg={6}>
          <div className="navdiv">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="home" title="Home">
                <form action="">
                  
                  <div>
                    <TextField
                      required
                      id="standard-basic1"
                      onChange={(e) => setfrom(e.target.value)}
                      label="FROM (IATA CODE)"
                      variant="standard"
                      value={from}
                    />
                    <TextField
                      required
                      id="standard-basic2"
                      onChange={(e) => setto(e.target.value)}
                      label="TO (IATA CODE)"
                      variant="standard"
                      value={to}
                    />
                  </div>
                  <br />
                  <div>
                    <TextField
                      id="standard-basic4"
                      label=" "
                      sx={{ width: 200 }}
                      type="Date"
                      variant="standard"
                      onChange={(e) => setdatte(e.target.value)}
                      value={datte}
                    />
                  </div>
                  <br />
                  <div>
                    <TextField
                      required
                      id="standard-basic2"
                      label="Adult"
                      type="Number"
                      variant="standard"
                      onChange={(e) => setadult(e.target.value)}
                      value={adult}
                    />
                    <TextField
                      style={{"padding-left":"1%"}}
                      id="standard-basic2"
                      label="Children"
                      type="Number"
                      variant="standard"
                      onChange={(e) => setChildren(e.target.value)}
                      value={children}
                    />
                  </div>
                  <br />
                  <br />
                  <div>
                    <Select
                      placeholder="Select Class"
                      sx={{ width: 240 }}
                      slotProps={{
                        listbox: {
                          placement: "bottom-start",
                        },
                      }}
                      onChange={(e) => settype(e.target.value)}
                    >
                      <Option value="Economy">Economy</Option>
                      <Option value="Premium Economy">Premium Economy</Option>
                      <Option value="Buisness or First">
                        Buisness or First
                      </Option>
                    </Select>
                  </div>
                  <br />
                  <br />
                  <div className="button-class">
                    <Button type="submit" onClick={handleFirstSubmit}>
                      Submit form
                    </Button>
                  </div>
                </form>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <form action="">
                  <h3 id="Form2-heading"> Flight Status</h3>
                  <br />
                  <div>
                    <TextField
                      required
                      id="standard-basic1"
                      label="FROM"
                      variant="standard"
                    />
                    <TextField
                      required
                      id="standard-basic2"
                      label="TO"
                      variant="standard"
                    />
                  </div>
                  <br />
                  <br />
                  <div>
                    <TextField
                      id="standard-basic2"
                      label="FlightNo."
                      variant="standard"
                    />
                    <TextField
                      id="standard-basic2"
                      label="  "
                      type="Date"
                      variant="standard"
                    />
                  </div>
                  <br />
                  <br />

                  <div className="button-class">
                    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                      <Button variant="soft" type="Submit" formaction={"/abc"}>
                        Search
                      </Button>
                    </Box>
                  </div>
                </form>
              </Tab>
            </Tabs>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Form1;
