var bcrypt = require("bcrypt-nodejs");
var validator = require('validator');

module.exports = function (sequelize, DataTypes) {
    // creates our User table
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
            // we use a hook to handle the email validation (using validator package)
            // instead of the built-in isEmail validation method (gmail addresses false negative)
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isTruckOwner: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    });

    // isEmail validation for the user email column 
    User.hook('beforeValidate', function (user) {
        // workaround for false error response for gmail addresses
        if (user.email.indexOf('@gmail.com') != -1) {
            return sequelize.Promise.resolve(user);
        }
        // isEmail validation
        if (validator.isEmail(user.email)) {
            return sequelize.Promise.resolve(user);
        } else {
            return sequelize.Promise.reject('Validation Error: invalid email');
        }
    });

    // User protoype method to check if our user password is valid 
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    // pre table creation hook to hash the user password 
    User.hook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(12), null);
    });

    return User;
};