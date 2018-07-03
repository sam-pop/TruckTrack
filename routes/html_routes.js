var db = require("../models");

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send('<h1>hello truck world!</h1>');
    });
};