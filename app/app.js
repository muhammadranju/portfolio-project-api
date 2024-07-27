const express = require("express");
const cors = require("cors");
const middleware = require("../middleware/middleware");
const router = require("../routes");
const app = express();

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credential: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.set("view engine", "ejs");
app.use(express.static("public"));

app.options("", cors(corsOptions));
app.use([middleware, router]);

module.exports = app;
