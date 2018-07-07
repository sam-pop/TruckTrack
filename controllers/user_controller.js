// Dependencies
var passport = require("../config/passport");
var isAuth_Destroy = require("../config/middleware/isAuth_Destroy");

// Variables
var db = require('../models');

module.exports = function (app) {

    // authenticate user and redirect according to user type
    app.post('/login', passport.authenticate('local'), function (req, res) {
        if (!req.user) {
            res.redirect('/login');
        }
        if (req.user.isTruckOwner)
            res.redirect('/profile/truck');
        else res.redirect('/profile');
    });

    // add new user
    app.post('/signup', function (req, res) {
        db.User.create(req.body).then(function (dbUser) {
            res.redirect('/login');
        }).catch(function (err) {
            res.status(500).json(err);
        });
    });

    // returns the user profile page
    app.get('/profile', isAuth_Destroy.isAuthenticated, function (req, res) {
        db.User.findOne({
            where: {
                email: req.user.email
            }
        }).then(function (dbUser) {
            var hbsObj = {
                user: dbUser
            };
            console.log('########################' + dbUser);
            res.render('userProfile', hbsObj);
        });
    });

    //TODO: (PUT) user profile details / settings

    //TODO: (GET) check if user isAuthenticated (already logged in)


};