const mongoose = require("mongoose");

const offerModel = mongoose.Schema({
  email: String,
  from: String,
  to: String,
  date: String,
  adult: Number,
  child:Number,
  type: String,
  id: String,
  carrerCode: String,
  flight_code: String,
  flight_name: String,
  stops: String,
  cabinType: String,
  currency: String,
  departureTime: String,
  arrivalTime: String,
},{timestamps:true});
module.exports = mongoose.model("OfferCollection", offerModel);
