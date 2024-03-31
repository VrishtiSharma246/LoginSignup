const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("register");
});

app.post("/signIn", (req, res) => {
  res.render("signIn");
});

app.post("/HomePage", (req, res) => {
  res.render("HomePage");
});

app.listen(4000, () => {
  console.log("server up at port 4000.");
});
