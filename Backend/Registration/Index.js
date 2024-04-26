const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Router = require('./Route');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

mongoose.connect('mongodb://localhost:27017/Airline_Database')
.then(()=>{
    console.log("MongoDB Started Successfully");
})
.catch((err)=>{
    console.log(`Error found:${err}`);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(Router);


app.listen(port,()=>{
    console.log(`Server on Port:${port} Started Successfully`);
})