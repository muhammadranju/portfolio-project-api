const { Schema, model } = require("mongoose");

const contactModel = Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,

    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Contact = model("Contact", contactModel);

module.exports = Contact;
