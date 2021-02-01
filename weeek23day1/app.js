import express from "express";
import hbs from "express-handlebars";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const data = [];
const error = [];
app.engine(
  ".hbs",
  hbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.post("/", function (req, res) {
  const { name } = req.body;
  if (name.length < 10) {
    error.push({
      field: "name",
      message: "Name length should be greater than 10",
    });
    res.redirect("/");
    return;
  } else {
    data.push(req.body);
    res.redirect("/");
  }
});
app.get("/", function (req, res) {
  res.render("home", { data: data, error: error });
});
app.get("/login", function (req, res) {
  res.render("home", { layout: "login", title: "Home page" });
});
app.get("/about", function (req, res) {
  res.render("about", { title: "About page" });
});
app.get("/skills", function (req, res) {
  res.render("skills", { title: "Skills page" });
});
const Port = 1234;

app.listen(Port, console.log(`Server is listen at ${Port}no. `));
