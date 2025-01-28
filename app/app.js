const express = require("express");
const ejs = require("ejs");
const middleware = require("../middleware/middleware");
const router = require("../routes");
const routerV2 = require("../routes/indexV2");
const app = express();

app.engine("ejs", ejs.renderFile);
app.set("view engine", ejs);

app.use(express.static("public"));

app.use([middleware, routerV2, router]);

module.exports = app;
