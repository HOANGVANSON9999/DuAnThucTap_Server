const user = require("../Model/User.Model");
const {
  mutipleMongoosetoObject,
  MongoosetoObject,
} = require("../Util/mongoUtil");
const notifier = require("node-notifier");
class userController {
  index(req, res) {
    user.find({}).then((user) => {
      res.render("listUser", {
        user: mutipleMongoosetoObject(user),
      });
    });
  }
  indexAddUser(req, res) {
    res.render('addUser')
  }
  addUserApi(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    if (
      email == "" ||
      password == ""
    ) {
      res.status(400).json({ message: "Các trường không được để trống" });

    } else if (
      !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        email
      )
    ) {
      res.json({
        status: "FAILED",
        message: "Email sai định dạng",
      });
    } else {
      user
        .findOne({ email: email })
        .then((data) => {
          if (data) {
            res.status(400).json({ message: "Email đã tồn tại" });
          } else {
            return user.create({
              email: email,
              password: password,
            });
          }
        })
        .then((data) => {
          res.status(200).json(data);
        })
        .catch((err) => {
          res.status(500).json({ error: err });
          console.log(err);
        });
    }
  }
}
module.exports = new userController();