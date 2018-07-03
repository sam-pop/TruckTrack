module.exports = function (sequelize, DataTypes) {
    var SocialHandles = sequelize.define("SocialHandles", {
        twitter: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        instagram: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        facebook: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        other: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    SocialHandles.associate = function (models) {
        SocialHandles.belongsTo(models.Truck, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return SocialHandles;
};