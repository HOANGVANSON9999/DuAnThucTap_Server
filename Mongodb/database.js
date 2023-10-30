const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Ket Noi MongoDb Thanh Cong");
  } catch (error) {
    console.log("Ket Noi MongoDb That Bai");
  }
}

module.exports = { connect };
