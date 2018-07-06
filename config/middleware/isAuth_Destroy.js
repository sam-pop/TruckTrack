exports.isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        return res.redirect('/');
    }
};

exports.destroySession = function (req, res, next) {
    req.logOut();
    req.session.destroy();
    res.redirect('/');
};