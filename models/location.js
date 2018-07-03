module.exports = function (sequelize, DataTypes) {
    // create our Location table
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
        },
        updateTime: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
                len: [1]
            }
        }
    });

    // associates Location with Truck (foreign key) 
    Location.associate = function (models) {
        Location.belongsTo(models.Truck, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Location;
};