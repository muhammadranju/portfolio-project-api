const express = require("express");
const middleware = require("../middleware/middleware");
const router = require("../routes");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use([middleware, router]);

module.exports = app;
