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

  return Suppliers;
}

export default Suppliers;
