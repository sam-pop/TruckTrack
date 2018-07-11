// Dependencies
var isAuth_Destroy = require("../config/middleware/isAuth_Destroy");

// Variables
var db = require("../models");

module.exports = function(app) {
  // add new truck (user, truck and socialHandles)
  app.post("/truckSignup", function(req, res) {
    req.body.isTruckOwner = true;
    db.User.create(req.body).then(function(dbUser) {
      req.body.UserId = dbUser.id;
      db.Truck.create(req.body)
        .then(function(dbTruck) {
          req.body.TruckId = dbTruck.id;
          db.SocialHandles.create(req.body).then(function() {
            db.Location.create(req.body).then(function() {
              res.redirect(307, "/login");
            });
          });
        })
        .catch(function(err) {
          res.status(500).json(err);
        });
    });
  });

  // returns all the trucks and locations
  app.get("/api/trucks", function(req, res) {
    db.Truck.findAll({
      attributes: {
        exclude: ["licensePlate", "UserId"]
      },
      include: [db.Location]
    }).then(function(dbTrucks) {
      res.json(dbTrucks);
    });
  });

  // returns the truck's public profile page
  app.get("/profile/truck/:id", function(req, res) {
    db.Truck.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbTruck) {
      var hbsObj = {
        truck: dbTruck
      };
      res.render("truckProfile", hbsObj);
    });
  });

  // returns the truck's profile page
  app.get("/profile/truck/", isAuth_Destroy.isAuthenticated, function(
    req,
    res
  ) {
    db.Truck.findOne({
      where: {
        UserId: req.user.id
      }
    }).then(function(dbTruck) {
      var hbsObj = {
        truck: dbTruck
      };
      res.render("truckOwnerProfile", hbsObj);
    });
  });

  // updates the truck location
  app.post(
    "/profile/truck/setLocation",
    isAuth_Destroy.isAuthenticated,
    function(req, res) {
      console.log(req.user);

      db.Truck.findOne({
        where: {
          UserId: req.user.id
        }
      }).then(function(dbTruck) {
        db.Location.update(req.body, {
          where: {
            TruckId: dbTruck.id
          }
        }).then(function() {
          res.json(req.body);
          console.log("Location Updated!");
        });
      });
    }
  );

  // returns the truck last updated location
  app.post(
    "/profile/truck/lastLocation",
    isAuth_Destroy.isAuthenticated,
    function(req, res) {
      db.Location.findOne({
        where: {
          TruckId: req.body.id
        }
      }).then(function(dbLocation) {
        res.json(dbLocation);
        console.log("Location Returned!");
      });
    }
  );

  //TODO: (PUT) truck profile details / settings

  app.get("/api/truck/", isAuth_Destroy.isAuthenticated, function(req, res) {
    db.Truck.findOne({
      where: {
        UserId: req.user.id
      }
    }).then(function(dbTruck) {
      var truckObj = {
        truck: dbTruck
      };
      res.json(truckObj);
    });
  });

  app.put("/truckProfileUpdate", function(req, res) {
    db.Truck.update(
      {
        truckName: req.body.truckName,
        desc: req.body.desc,
        category: req.body.category,
        licensePlate: req.body.licensePlate,
        pictureURL: req.body.pictureURL,
        menuURL: req.body.menuURL
      },
      {
        where: {
          id: req.user.id
        }
      }
    );
  });

  app.put("/socialHandleUpdate/:id", function(req, res) {
    db.SocialHandles.update(
      {
        twitter: req.body.twitter,
        instagram: req.body.instagram,
        facebook: req.body.facebook
      },
      {
        where: {
          TruckId: req.params.id
        }
      }
    ).then(function(data) {
      res.json(data);
    });
  });
};
