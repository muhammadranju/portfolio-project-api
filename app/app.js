const path = require("path");
const express = require("express");
const middleware = require("../middleware/middleware");
const router = require("../routes");
const app = express();

// Set 'views' directory for any views being rendered
// app.set("views", path.join(__dirname, "views"));

app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use([middleware, router]);

module.exports = app;
