const CustomerCustomerDemo = (sequelize, DataTypes) => {
  const CustomerCustomerDemo = sequelize.define(
    "customerCustomerDemo",
    {
      customerId: {
        type: DataTypes.STRING(5)
      },
      customerTypeId: {
        type: DataTypes.STRING(10)
      }
    }
  );


  CustomerCustomerDemo.associate = function(models) {
    CustomerCustomerDemo.belongsTo(models.customers, { foreignKey: 'customerId' })
    CustomerCustomerDemo.belongsTo(models.customerCustomerDemo, { foreignKey: 'customerTypeId' })
  };

  return CustomerCustomerDemo;
}

export default CustomerCustomerDemo;
