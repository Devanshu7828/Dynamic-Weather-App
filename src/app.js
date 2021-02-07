const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const hbs = require("hbs");


//static path
// const staticPath = app.use(express.static(path.join(__dirname, "../public")));
const staticPath = path.join(__dirname, "../public");
const  template_path=path.join(__dirname, "../templetes/views");
const partials_path=path.join(__dirname, "../templetes/partials");


app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set('views', template_path);
hbs.registerPartials(partials_path);

//routing
app.get("", (req, res) => {
  //   res.send("Welcome to home page");
  res.render("index");
});

app.get("/about", (req, res) => {
  //   res.send("About us by rajak"); after hbs we use
  res.render("about");
});

app.get("/weather", (req, res) => {
//   res.send("weahter page ");
res.render('weather');
});

app.get("*", (req, res) => {
//   res.send("404 Error ");
   res.render('404error')
});

//listning to server
app.listen(port, () => {
  console.log(`listneing to the port at ${port}`);
});
