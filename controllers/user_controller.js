// Dependencies
const User = require('../models/user');
const passport = require("../config/passport");
// Variables
let db = require('../models');

module.exports = function (app) {

    // GET signup page
    app.get('/signup', function (req, res) {
        res.render("signup");
    });

    // POST signup page
    app.post('/signup', function (req, res) {
        db.User.create(req.body).then(function (dbUser) {
            res.redirect(307, '/login');
        }).catch(function (err) {
            res.status(500).json(err);
        });
    });
};