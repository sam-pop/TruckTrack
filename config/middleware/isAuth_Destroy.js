// checks if the user is already authenticated, if not redirects the user to the login page
exports.isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        return res.redirect('/login');
    }
};

// logout and destroy the user session
exports.destroySession = function (req, res, next) {
    req.logOut();
    req.session.destroy();
    res.redirect('/');
};