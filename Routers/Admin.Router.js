const express = require('express');
const routers = express.Router();
const adminController = require("../Controllers/Admin.Controller");
routers.get('/', adminController.index);
module.exports = routers;