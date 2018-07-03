var db = require("../models");

module.exports = function (app) {
    app
        .get('/', function (req, res) {
            res.send('<h1>hello truck world!</h1>');
        });
    app.get("/signup", function (req, res) {
        res.render('signup');
    });
    app.get("/signin", function (req, res) {
        res.render('signin');
    });
};