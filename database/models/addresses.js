const Addresses = (sequelize, DataTypes) => {
  const Addresses = sequelize.define(
    "addresses",
    {
      userId: {
        type: DataTypes.INTEGER
      },
      addressLine1: {
        type: DataTypes.STRING(200)
      },
      addressLine2: {
        type: DataTypes.STRING(200)
      },
      state: {
        type: DataTypes.STRING(100)
      },
      country: {
        type: DataTypes.STRING(100)
      },
      zipCode: {
        type: DataTypes.STRING(100)
      },
      phoneNo: {
        type: DataTypes.STRING(100)
      }
    }
  );

  Addresses.associate = function (models) {
    Addresses.belongsTo(models.users);
  };

  return Addresses;
}

export default Addresses;
