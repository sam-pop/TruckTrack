// Dependencies
const User = require('../models/user');

// Variables
let db = require('../models');

module.exports = function (app) {
    app.get('/test', function (req, res) {
        let user = {
            email: "tesg@gmail.com",
            password: 'passtest',
            name: 'Test McTesty'
        };
        addUser(user);
        res.send('test');

    });
};



function addUser(user) {
    db.User.create({
        email: user.email,
        password: user.password,
        name: user.name
    }).then(function (dbUser) {
        console.log(dbUser);
    });
}