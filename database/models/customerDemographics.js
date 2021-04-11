const CustomerDemographics = (sequelize, DataTypes) => {
  const CustomerDemographics = sequelize.define(
    "customerDemographics",
    {
      customerTypeId: {
        type: DataTypes.STRING(10),
        unique: true,
        primaryKey: true
      },
      customerDesc: {
        type: DataTypes.TEXT
      }
    }
  );

  CustomerDemographics.associate = function (models) {
    CustomerDemographics.belongsToMany(models.customers, { through: 'customerCustomerDemo', foreignKey: 'customerId' });
  };

  return CustomerDemographics;
}

export default CustomerDemographics;
