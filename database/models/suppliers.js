const Suppliers = (sequelize, DataTypes) => {
  const Suppliers = sequelize.define(
    "suppliers",
    {
      userId: {
        type: DataTypes.INTEGER
      },
      marketPlace: {
        type: DataTypes.ENUM('walmart', 'amazon')
      },
      consumerKey: {
        type: DataTypes.STRING(100)
      },
      secretKey: {
        type: DataTypes.STRING(100)
      }
    }
  );

  Suppliers.associate = function (models) {
    Suppliers.belongsTo(models.users);
  };

  return Suppliers;
}

export default Suppliers;
