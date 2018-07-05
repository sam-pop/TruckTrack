var db = require("../models");
var isAuth_Destroy = require("../config/middleware/isAuth_Destroy");

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send('<h1>hello truck world!</h1>'); //TODO: change this
    });

    // renders the signup page for users
    app.get("/signup", function (req, res) {
        res.render('signup');
    });

    // renders the signup page for truck owners
    app.get("/signupTruck", function (req, res) {
        res.render('signupTruck');
    });

    // renders the login page
    app.get("/login", function (req, res) {
        res.render('login');
    });

    // logout
    app.get("/logout", isAuth_Destroy.destroySession);

};