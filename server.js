// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("./config/passport");

// Variables
var PORT = process.env.PORT || 8080;
var db = require('./models');
var app = express(); // express app init

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
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// router
require('./routes/html_routes')(app);
require('./controllers/truck_controller')(app);
require('./controllers/user_controller')(app);


// sequelize db sync + app listen
db.sequelize.sync({
    force: true
}).then(function () {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});