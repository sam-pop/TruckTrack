const express = require("express");
const bodyParser = require("body-parser");

const app = express();


const PORT = process.env.PORT || 8080;

// Use the express.static middleware to serve static content for the app from
// the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.get('/', (req, res) => {
    res.send('Welcome to TRUCKTRACK');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));