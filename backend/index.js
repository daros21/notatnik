const express = require("express");
const app = express();
const { port } = require("./config");
const apiRouter = require("./routes/api");
const bodyParser = require("body-parser");
const cors = require("cors");

// database
require("./db/mongoose");

// parsers
// Content-type: application/json
app.use(bodyParser.json());

// fix cors
app.use(cors());

// routes
app.use("/api/", apiRouter);

//serwer
app.listen(port, function () {
  console.log(`serwer slucha na http://localhost:${port}`);
});
