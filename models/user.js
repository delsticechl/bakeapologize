module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,

    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },

    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },

    password: DataTypes.STRING
  });

  return User;
};
