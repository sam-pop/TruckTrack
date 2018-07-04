// Dependencies
const User = require('../models/user');

// Variables
let db = require('../models');

module.exports = function (app) {

    // GET signup page
    app.get('/signup', function (req, res) {
        res.render("signup");
    });

    // POST signup page
    // app.post('/signup', function (req, res) {
    //     let user = {
    //         email: "tesg@gmail.com",
    //         password: 'passtest',
    //         name: 'Test McTesty'
    //     };
    //     addUser(user);
    //     res.end('test');
    // });

    app.post('/signup', function (req, res) {
        let user = {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
        };
        addUser(user);
        // res.send('test');

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