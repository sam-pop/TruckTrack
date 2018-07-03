const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("./config/passport");

const PORT = process.env.PORT || 8080;
const db = require('./models');

const app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(session({
    secret: "this is how do we it",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.get('/', (req, res) => {
    res.send('Welcome to TRUCKTRACK');
});

db.sequelize.sync({
    force: true
}).then(function () {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});