const EmployeeTerritories = (sequelize, DataTypes) => {
  const EmployeeTerritories = sequelize.define(
    "employeeTerritories",
    {
      territoryId: {
        type: DataTypes.STRING(20)
      },
      employeeId: {
        type: DataTypes.INTEGER
      }
    }
  );

  EmployeeTerritories.associate = function (models) {
    EmployeeTerritories.belongsTo(models.employees, { foreignKey: 'employeeId' });
    EmployeeTerritories.belongsTo(models.territories, { foreignKey: 'territoryId' });
  };


  // CustomerCustomerDemo.associate = function(models) {
  //   CustomerCustomerDemo.belongsTo(models.customers, { foreignKey: 'customerId' })
  //   CustomerCustomerDemo.belongsTo(models.customerCustomerDemo, { foreignKey: 'customerTypeId' })
  // };

  return EmployeeTerritories;
}

export default EmployeeTerritories;
