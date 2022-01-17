module.exports = {sequelize, DataTypes} => {
    const User = sequelize.define("User", {
        id: {allowNull: false, primaryKey: true,},
        username: {type: this.DataTypes.STRING, allowNull: false},
    });
    return User;
};