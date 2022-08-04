
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const Product = require('./Product')

class Category extends Model {}

Category.init(
  {
    // define columns
    category_name: {
      type: DataTypes.STRING, 
      allowNull: false
    }, 
    products: {
      type: DataTypes.ARRAY, 
      allowNull: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

Category.hasMany(Product)
Product.belongsTO(Category)

module.exports = Category;
