module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('Recipe', {
      ingredients: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      steps: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    });
  
    Recipe.associate = models => {
      Recipe.belongsTo(models.Cake);
    };
  
    return Recipe;
  };