const { Model, DataTypes } = require("sequelize");

class Buy extends Model {
  static init(sequelize) {
    super.init({
      client_id: {
        type: DataTypes.INTEGER
      },
      is_paid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    }, { sequelize });
  }

  static associate(models){
    this.belongsTo(models.Client, { foreignKey: "client_id", as: "client" });
    this.belongsToMany(models.Product, {
      foreignKey: 'buy_id',
      as: 'products',
      through: 'products_buys'
    });
  }

  async set_paid(is_paid){
    this.is_paid = is_paid;
    return await this.save();
  }
}

module.exports = Buy;
