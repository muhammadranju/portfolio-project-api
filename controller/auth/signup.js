const User = require("../../models/auth.model");
const bcrypt = require("bcryptjs");
const signupPostController = async (req, res, next) => {
  try {
    const { username, password, name } = req.body;

    if (!name) {
      throw Error("Your not a valid parson");
    }
    if (name !== process.env.AUTH_NAME) {
      throw Error("Entre your valid name");
    }
    const salt = await bcrypt.genSalt(11);
    const hash = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      password: hash,
    });

    await user.save();

    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { signupPostController };
