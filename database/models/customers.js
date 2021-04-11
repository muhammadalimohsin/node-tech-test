const Customers = (sequelize, DataTypes) => {
  const Customers = sequelize.define(
    "customers",
    {
      customerId: {
        type: DataTypes.STRING(5),
        allowNull: false,
        references: {         // orderDetails hasMany order
          model: {
            tableName: "customerCustomerDemo",
            field: "customerId"
          },
          key: 'customerId'
        }
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
      postalcode: {
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
    }
  );

  Customers.associate = function (models) {
    Customers.belongsToMany(models.customerDemographics, { through: 'customerCustomerDemo', foreignKey: 'customerId' });
  };

  return Customers;
}

export default Customers;
