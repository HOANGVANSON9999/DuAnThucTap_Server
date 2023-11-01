const user = require('./User.Router')
const product = require('./Product.Router')


function routers(app){
  app.use("/User",user);
  app.use("/Product",product);
}
module.exports = routers;