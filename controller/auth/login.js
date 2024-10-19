const User = require("../../models/auth.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const loginGetController = async (req, res, next) => {
  try {
    return res
      .status(200)
      .render("login.ejs", { title: "Login Page", isAuth: true });
  } catch (error) {
    next(error);
  }
};

const loginPostController = async (req, res, next) => {
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

    res.cookie("auth", token);
    return res.status(200).redirect("/");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { loginGetController, loginPostController };
