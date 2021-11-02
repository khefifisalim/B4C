const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5000, (err) => {
  err
    ? console.log("error", err)
    : console.log("server is runnig on port 5000");
});
