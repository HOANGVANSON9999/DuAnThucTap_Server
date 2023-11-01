const productModel = require = ("../Model/Product.Model");
const { mutipleMongoosetoObject, MongoosetoObject, } = require("../Util/mongoUtil");
import { v2 as cloudinary } from 'cloudinary';

class productController {
  index(req, res) {
    res.render("product")
  }

  async listProduct(req, res, next) {
    productModel.find().then((product) => {
      res.json({
        product: mutipleMongoosetoObject(product),
      });
    });
  }

}
module.exports = new productController();