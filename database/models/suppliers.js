const Suppliers = (sequelize, DataTypes) => {
  const Suppliers = sequelize.define(
    "suppliers",
    {
      supplierId: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true
      },
      companyName: {
        type: DataTypes.STRING(40)
      },
      contactName: {
        type: DataTypes.STRING(30)
      },
      contactTitle: {
        type: DataTypes.STRING(30)
      },
      address: {
        type: DataTypes.STRING(60)
      },
      city: {
        type: DataTypes.STRING(15)
      },
      region: {
        type: DataTypes.STRING(15)
      },
      postalCode: {
        type: DataTypes.STRING(10)
      },
      country: {
        type: DataTypes.STRING(15)
      },
      phone: {
        type: DataTypes.STRING(24)
      },
      fax: {
        type: DataTypes.STRING(24)
      },
      homePage: {
        type: DataTypes.TEXT
      }
    }
  );

  return Suppliers;
}

export default Suppliers;
