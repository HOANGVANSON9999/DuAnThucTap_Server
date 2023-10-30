const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const handlebar = require("express-handlebars");
let methodOverride = require("method-override");
const Mongodb = require("./Mongodb/database");
const PORT = process.env.PORT;
app.use(express.json());
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false }));

Mongodb.connect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
