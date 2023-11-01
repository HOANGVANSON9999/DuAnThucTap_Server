const express = require("express");
const routers = express.Router();
const userController = require("../Controllers/User.Controller");
routers.get('/listUser', userController.index);












module.exports = routers;