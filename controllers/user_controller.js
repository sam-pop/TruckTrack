// Dependencies
var passport = require("../config/passport");
var isAuth_Destroy = require("../config/middleware/isAuth_Destroy");

// Variables
var db = require("../models");

module.exports = function(app) {
  //checks if the user isAuthenticated
  app.get("/auth", isAuth_Destroy.isAuthenticated, function(req, res) {
    if (!req.user) res.redirect("/login");
    else res.json(true);
  });

  // authenticate user and redirect according to user type
  app.post("/login", passport.authenticate("local"), function(req, res) {
    if (!req.user) {
      res.redirect("/login");
    }
    if (req.user.isTruckOwner) res.redirect("/profile/truck");
    else res.redirect("/profile");
  });

  // add new user
  app.post("/signup", function(req, res) {
    db.User.create(req.body)
      .then(function(dbUser) {
        res.redirect(307, "/login");
      })
      .catch(function(err) {
        res.status(500).json(err);
      });
  });

  // returns the user profile page
  app.get("/profile", isAuth_Destroy.isAuthenticated, function(req, res) {
    if (req.user.isTruckOwner) res.redirect("/profile/truck");
    else {
      db.User.findOne({
        where: {
          email: req.user.email
        }
      }).then(function(dbUser) {
        var hbsObj = {
          user: dbUser
        };
        res.render("userProfile", hbsObj);
      });
    }
  });

  // update user profile
  app.put("/userProfileUpdate", function(req, res) {
    db.User.update(
      {
        name: req.body.name,
        email: req.body.email
      },
      {
        where: {
          id: req.user.id
        }
      }
    );
  });

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id,
        name: req.user.name
      });
    }
  });
};
