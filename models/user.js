var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
    // creates our User table
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
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

    // User protoype method to check if our user password is valid 
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    // pre table creation hook to hash the user password 
    User.hook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    return User;
};