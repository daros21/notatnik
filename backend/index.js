const express = require("express");
const app = express();
const { port } = require("./config");
const apiRouter = require("./routes/api");
const bodyParser = require("body-parser");

// database
require("./db/mongoose");

// parsers
// Content-type: application/json
app.use(bodyParser.json());

// routes
app.use("/api/", apiRouter);

//serwer
app.listen(port, function () {
  console.log(`serwer slucha na http://localhost:${port}`);
});
