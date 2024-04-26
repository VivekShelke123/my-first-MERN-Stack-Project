const express = require('express');
const userController = require('./Controller');

const Router = express.Router();

Router.post('/Register',userController.addUser);

Router.post('/LogIn',userController.getUser);

Router.get('/sendEmail/:email',userController.sendEmail);

Router.post('/addOffer',userController.addOffer);

Router.get('/getOffer/:email',userController.getOffer);

module.exports = Router;