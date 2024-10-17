// backend/db.js
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://captinindian1989:xOal3wsdxOms8vSm@quickpay.ehoi1.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const AccountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
});

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
});

const Account = mongoose.model("Account", AccountSchema);
const User = mongoose.model("User", UserSchema);

module.exports = { Account, User };
