module.exports = (sequelize, DataTypes) => {
  const Cake = sequelize.define('Cake', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER, // price in VND
    imageUrl: DataTypes.STRING,
    recipe: DataTypes.TEXT,

    // ✅ Add this field so seasonal cakes can be stored
    category: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Cake;
};
