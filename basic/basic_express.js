const express = require("express");

const port = 3000;
const app = express();

app.use(function (req, res, next) {
  const gmtDateTime = new Date().toUTCString();
  console.log(
    `[${req.hostname}]-[${gmtDateTime}] path: ${req.path} status: ${res.statusCode}`
  );
  next();
});

app.get("/", function (req, res) {
  res.send("Hello there!");
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
