const Employees = (sequelize, DataTypes) => {
  const Employees = sequelize.define(
    "employees",
    {
      employeeId: {
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      lastName: {
        type: DataTypes.STRING(20)
      },
      firstName: {
        type: DataTypes.STRING(10)
      },
      title: {
        type: DataTypes.STRING(30)
      },
      titleOfCourtesy: {
        type: DataTypes.STRING(25)
      },
      birthDate: {
        type: DataTypes.DATE
      },
      hireDate: {
        type: DataTypes.DATE
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
      homePhone: {
        type: DataTypes.STRING(24)
      },
      extension: {
        type: DataTypes.STRING(4)
      },
      photo: {
        type: DataTypes.BLOB
      },
      notes: {
        type: DataTypes.TEXT
      },
      reportsTo: {
        type: DataTypes.INTEGER
      },
      photoPath: {
        type: DataTypes.STRING
      },
    }
  );


  Employees.associate = function (models) {
    Employees.belongsToMany(models.territories, { through: 'employeeTerritories' }); // , foreignKey: 'employeeId'
  };

  return Employees;
}

export default Employees;
