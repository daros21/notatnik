const express = require("express");
const app = express();
const { port } = require("./config");
const apiRouter = require("./routes/api");
require("./db/mongoose");

app.use("/", apiRouter);

//serwer
app.listen(port, function () {
  console.log(`serwer slucha na http://localhost:${port}`);
});