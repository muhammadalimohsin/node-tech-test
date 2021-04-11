const Shippers = (sequelize, DataTypes) => {
  const Shippers = sequelize.define(
    "shippers",
    {
      shipperId: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true
      },
      companyName: {
        type: DataTypes.STRING(40)
      },
      phone: {
        type: DataTypes.STRING(24)
      }
    }
  );

  return Shippers;
}

export default Shippers;
