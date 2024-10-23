const User = require("../../models/auth.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginAPIPostController = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ massage: "Invalid username or password" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({ massage: "Invalid username or password" });
    }

    const payload = {
      isAuth: true,
      userId: user._id,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "90d",
    });

    // res.cookie("auth", token);

    return res.status(200).json({ massage: "Login Successful", token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginAPIPostController,
};
