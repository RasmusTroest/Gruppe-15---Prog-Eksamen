const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function (req, res) {
    res.render('pages/index');
});

app.get('/about', function (req, res) {
    res.render('pages/about');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));