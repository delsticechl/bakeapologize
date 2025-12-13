module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      totalPrice: DataTypes.INTEGER
    });
  
    Order.associate = models => {
      Order.belongsTo(models.User);
      Order.hasMany(models.OrderItem);
    };
  
    return Order;
  };
