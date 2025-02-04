const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const compression = require("compression");

// CORS options to allow requests from frontend running on port 5500
const corsOptions = {
  // origin: process.env.BASE_URL, // Allow only requests from this origin
  origin: "*", // Allow only requests from this origin
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], // Allow only these methods
  credential: true,
  allowedHeaders: ["Content-Type", "Authorization"], // Allow only these headers
};

const middleware = [
  express.urlencoded({ extended: false }),
  express.json(),
  morgan("dev"),
  cookieParser(),
  cors(corsOptions),
  compression({
    level: 6,
    threshold: 100 * 1000,
    filter: (req, res) => {
      if (req.headers["x-no-compression"]) {
        return false;
      }
      return compression.filter(req, res);
    },
  }),
];

module.exports = middleware;
