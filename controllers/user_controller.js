// Dependencies
var User = require('../models/user');
var passport = require("../config/passport");
var isAuth_Destroy = require("../config/middleware/isAuth_Destroy");

// Variables
var db = require('../models');

module.exports = function (app) {

    // return user profile page
    app.get('/profile/:id', function (req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            var hbsObj = {
                user: dbUser
            };
            res.render('userProfile', hbsObj);
        });
    });

    //TODO: (PUT) user profile details / settings

    //TODO: (GET) check if user isAuthenticated (already logged in)


    // authenticate user
    app.post('/auth', passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/'
    }));

    // add new user
    app.post('/signup', function (req, res) {
        db.User.create(req.body).then(function (dbUser) {
            console.log(dbUser); //TODO: delete, for testing only
            res.redirect(307, '/login');
        }).catch(function (err) {
            res.status(500).json(err);
        });
    });

};