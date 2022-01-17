module.exports = {sequelize, DataTypes} => {
    const User = sequelize.define("User", {
        id: {allowNull: false, primaryKey: true,},
        
    });

};