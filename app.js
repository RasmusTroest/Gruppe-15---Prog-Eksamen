const express = require("express");
const path = require("path");

const app = express();

// 1) View engine
app.set("view engine", "ejs");

// 2) (Optional but recommended) Set views folder explicitly
//    Only needed if your views folder isn't exactly ./views
app.set("views", path.join(__dirname, "views"));

// 3) Static files (CSS, images, JS) served from /public
//    URL: /min.css  ->  ./public/min.css
app.use(express.static(path.join(__dirname, "public")));

// 4) Routes
app.get("/", (req, res) => {
  res.render("pages/index"); // looks for: ./views/pages/index.ejs
});

app.get("/about", (req, res) => {
  res.render("pages/about"); // looks for: ./views/pages/about.ejs
});

// 5) Port (Azure uses process.env.PORT)
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
``