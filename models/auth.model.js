const { Schema, model } = require("mongoose");

const authSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model("User", authSchema);

module.exports = User;
