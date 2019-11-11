const express = require("express");
const app = express();

app.set("view engine", "hbs");

// app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("index.hbs");
});

app.post("/users", (req, res) => {
  console.log(req.body);
});

app.listen(3000);
