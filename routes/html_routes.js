var isAuth_Destroy = require('../config/middleware/isAuth_Destroy');

module.exports = function (app) {

  // homepage (index)
  app.get('/', function (req, res) {
    res.render('index');
  });

  // renders the signup page for users
  app.get('/signup', function (req, res) {
    if (!req.user)
      res.render('signup');
    else res.redirect('/UserProfile');
  });

  app.get('/userProfile', function (req, res) {
    res.render('userProfile');
  });

  // renders the signup page for truck owners
  app.get('/signupTruck', function (req, res) {
    res.render('signupTruck');
  });

  // renders the login page
  app.get('/login', function (req, res) {
    if (!req.user)
      res.render('login');
    else res.redirect('/profile');
  });

  app.get('/about', function (req, res) {
    res.render('about');
  });

  app.get('/userProfileUpdate', function (req, res) {
    res.render('userProfileUpdate');
  });

  // logout
  app.get('/logout', isAuth_Destroy.destroySession);

};