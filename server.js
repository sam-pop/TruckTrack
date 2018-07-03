// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("./config/passport");

// Variables
const PORT = process.env.PORT || 8080;
const db = require('./models');
const app = express(); // express app init

// sets up the express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// static serve the public folder to our express app
app.use(express.static("public"));

// init and config our express session
app.use(session({
    secret: "big balagan",
    resave: true,
    saveUninitialized: true
}));

// passport init
app.use(passport.initialize());
app.use(passport.session());

// handlebars view engine init
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// router
require('./controllers/user_controller')(app);
require('./routes/api_routes')(app);

// sequelize db sync + app listen
db.sequelize.sync({
    force: true
}).then(function () {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});