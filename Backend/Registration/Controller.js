const userModel = require("./Model");
const offerModel = require("./OfferModel");

const addUser = async (req, res) => {
  
  const { fname, lname, email, mobile, pass } = req.body;

  try {
    const data1 = new userModel({ fname, lname, email, mobile, pass });
    const data = await data1.save();
    res.status(200).send({ data });
  } catch (err) {
    res.status(400).send({ msg: "Adding User Failed" });
  }
};

const getUser = async (req, res) => {
  const { email, pass } = req.body;
  try {
    const data = await userModel.findOne({ email: email });
    if (data) {
      if (pass === data.pass) {
        res.json("exists");
      } else {
        res.json("notexists");
      }
    } else {
      res.json("notfound");
    }
  } catch (err) {
    res.status(400).send({ err });
  }
};
const sendEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const response = await axios.post("http://localhost:5001/getEmail", email);
    const data = response.data;
    res.status(200).send({ data });
  } catch (err) {
    res.status(400).send({ err });
  }
};

const addOffer = async (req, res) => {
  const {email,from,to,date,adult,child,type,id,carrerCode,flight_code,flight_name,stops,cabinType,currency,departureTime,arrivalTime} = req.body;
  
  try {
    const element = await offerModel.findOne({ id:id });
    if(!element){
      const data1 = new offerModel({email,from,to,date,adult,child,type,id,carrerCode,flight_code,flight_name,stops,cabinType,currency,departureTime,arrivalTime});
      const data = await data1.save();
      res.status(200).send({ MSSG:"HELLO" });
    }
    else{
      res.send({mssg:"Booking Already Present"});
    }
    
  } catch (err) {
    res.status(400).send({ msg: "Adding User Failed" });
  }
};

const getOffer = async (req,res)=>{
    const {email} = req.params;
    try {
        const data = await offerModel.find({email:email});
        res.status(200).send({data});
    } catch (err) {
        res.status(400).send({msg:"Getting  User Failed"});
    }
}

module.exports = { addUser, getUser, sendEmail,addOffer,getOffer };
