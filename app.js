const express = require("express");
const path = require("path");

const app = express();

// 1) View engine (Used for azure webapp)
app.set("view engine", "ejs");

// 2) Set views folder explicitly
app.set("views", path.join(__dirname, "views"));

// Static files (CSS, images, JS) served from /public
//    URL: /min.css  ->  ./public/min.css
app.use(express.static(path.join(__dirname, "public")));

// used for setting active page in header
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

// Routes
app.get("/", (req, res) => {
  res.render("pages/dashboard"); // looks for: ./views/pages/index.ejs
});

app.get("/about", (req, res) => {
  res.render("pages/about"); // looks for: ./views/pages/about.ejs
});

app.get("/investeringscases", (req, res) => {
  res.render("pages/investeringscases"); // looks for: ./views/pages/investeringscases.ejs
});

app.get("/minBruger", (req, res) => {
  res.render("pages/minBruger"); // looks for: ./views/pages/minBruger.ejs
});

app.get("/sammenlignCases", (req, res) => {
  res.render("pages/sammenlignCases"); // looks for: ./views/pages/sammenlignCases.ejs
});

// 5) Port (Azure uses process.env.PORT)
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));

