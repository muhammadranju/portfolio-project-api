const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  techBio: {
    title: String,
    bio: String,
  },
  contactInfo: {
    email: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    address: {
      type: String,
    },
  },
  socialLinks: {
    resume: String,
    github: String,
    linkedin: String,
    x: String,
  },
});

const User = model("User", userSchema);

module.exports = User;
