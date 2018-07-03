var db = require("../models");

module.exports = function (app) {
    app.get('/hi', function (req, res) {
        res.send('<h1>hi truck world!</h1>');
    });
};