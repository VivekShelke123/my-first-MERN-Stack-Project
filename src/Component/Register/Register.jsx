
import React from "react";
import { useState } from "react";
import "./Form.css";
import vid from "./1.mp4";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Register = () => {
  const [validated, setValidated] = useState(false);
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [mobile, setmobile] = useState(0);
  const [pass, setpass] = useState('');
  const navigate = useNavigate();

  function handleSubmit(){

    const signData = {
      fname:fname,
      lname:lname,
      email:email,
      mobile:mobile,
      pass:pass
    }
    
    axios.post('http://localhost:5000/Register',signData)
    .then(()=>{
      navigate('/Login');
      alert("Sign Successful");
    })
    .catch((err)=>{
      console.log(`error found ERROR:${err}`);
    })

  };

  return (
    <div className="wrapper">
      <video src={vid} alt="" autoPlay={"true"} loop muted />
    

      <div className="cont">
        <form>
          <h1>Sign Up</h1>

          <div className="input">
            <label>Firstname:</label>
            <input id="inp1" type="text" placeholder="Enter Firstname"  required value={fname} onChange={(e)=>setfname(e.target.value)} />
          </div>

          <div className="input">
            <label>Lastname:</label>
            <input id="inp2" type="text" placeholder="Enter Lastname" required value={lname} onChange={(e)=>setlname(e.target.value)} />
          </div>

          <div className="input">
            <label>Email:</label>
            <input id="inp3" type="email" placeholder="Email" required value={email} onChange={(e)=>setemail(e.target.value)} />
          </div>

          <div className="input">
            <label>Mobile No:</label>
            <input id="inp4" type="tele" placeholder="Enter Mobile No." required value={mobile} onChange={(e)=>setmobile(e.target.value)} />
          </div>

          <div className="input">
            <label>Password:</label>
            <input id="inp5" type="password" placeholder="Enter Password" required value={pass} onChange={(e)=>setpass(e.target.value)} />
          </div>

       <button onClick={handleSubmit}>Sign Up</button>

   

          <div className="login-link">
            <p>
              Already have an account?<Link to='/Login'>SignUp</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
