module.exports = function (sequelize, DataTypes) {
    var Location = sequelize.define("Location", {
        lat: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                isFloat: true,
                len: [1]
            }
        },
        lon: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                isFloat: true,
                len: [1]
            }
        }
    });

    Location.associate = function (models) {
        Location.belongsTo(models.Truck, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Location;
};