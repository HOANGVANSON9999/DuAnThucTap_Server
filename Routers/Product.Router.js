const express = require("express");
const routers = express.Router();
const productController = require("../Controllers/Product.Controller");
const uploadImg = require("../Middleware/uploadImg");
routers.get("/listProduct", productController.index);


module.exports = routers;