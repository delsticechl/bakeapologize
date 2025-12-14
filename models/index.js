const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '..', 'database.sqlite'),
  logging: false
});

// Load models
const User = require('./user')(sequelize, DataTypes);
const Cake = require('./cake')(sequelize, DataTypes);
const Cart = require('./cart')(sequelize, DataTypes);
const CartItem = require('./cartItem')(sequelize, DataTypes);
const Recipe = require('./recipe')(sequelize, DataTypes);   // ✅ NEW

// ✅ NEW: Load Order + OrderItem
const Order = require('./Order')(sequelize, DataTypes);
const OrderItem = require('./OrderItem')(sequelize, DataTypes);

// --------------------
// Associations
// --------------------

// User ↔ Cart
User.hasOne(Cart);
Cart.belongsTo(User);

// Cart ↔ CartItem
Cart.hasMany(CartItem, { onDelete: 'CASCADE' });
CartItem.belongsTo(Cart);

// Cake ↔ CartItem
Cake.hasMany(CartItem);
CartItem.belongsTo(Cake);

// ✅ NEW: User ↔ Order
User.hasMany(Order);
Order.belongsTo(User);

// ✅ NEW: Order ↔ OrderItem
Order.hasMany(OrderItem, { onDelete: 'CASCADE' });
OrderItem.belongsTo(Order);

// ✅ NEW: Cake ↔ OrderItem
Cake.hasMany(OrderItem);
OrderItem.belongsTo(Cake);

// ✅ NEW: Cake ↔ Recipe (1:1)
Cake.hasOne(Recipe, { onDelete: 'CASCADE' });
Recipe.belongsTo(Cake);

// Export all models
module.exports = {
  sequelize,
  Sequelize,
  User,
  Cake,
  Cart,
  CartItem,
  Recipe,      // ✅ MUST EXPORT
  Order,
  OrderItem
};
