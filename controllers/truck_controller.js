// Dependencies
var passport = require("../config/passport");
var isAuth_Destroy = require("../config/middleware/isAuth_Destroy");

// Variables
var db = require('../models');

module.exports = function (app) {

    // returns the truck profile page 
    //TODO: check how to validate that the user is a truck owner (isTruckOwner = true in the user object)
    app.get('/profile/truck/:id', isAuth_Destroy.isAuthenticated, function (req, res) {
        db.Truck.findOne({
            where: {
                userId: req.params.id
            }
        }).then(function (dbTruck) {
            var hbsObj = {
                truck: dbTruck
            };
            res.render('truckProfile', hbsObj);
        });
    });

    //TODO: (PUT) truck profile details / settings

    //add new truck (user, truck and socialHandles)
    app.post('/truckSignup', function (req, res) {
        req.body.isTruckOwner = true;
        db.User.create(req.body).then(function (dbUser) {
            req.body.UserId = dbUser.id;
            db.Truck.create(req.body).then(function (dbTruck) {
                req.body.TruckId = dbTruck.id;
                db.SocialHandles.create(req.body).then(function (dbSocial) {
                    db.Location.create(req.body).then(function (dbLocation) {
                        res.redirect(307, '/login');
                    });
                });
            }).catch(function (err) {
                res.status(500).json(err);
            });
        });
    });

    // updates the truck location
    app.put('/profile/truck/:id/setLocation', function (req, res) {
        db.Location.update(req.body, {
            where: {
                TruckId: req.params.id
            }
        }).then(function () {
            console.log("location updated!");
            res.redirect(307, '/profile/truck/'); //TODO: test if this is the right path
        });
    });

};