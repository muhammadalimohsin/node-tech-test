const Territories = (sequelize, DataTypes) => {
  const Territories = sequelize.define(
    "territories",
    {
      territoryId: {
        type: DataTypes.STRING(20),
        unique: true,
        primaryKey: true
      },
      territoryDescription: {
        type: DataTypes.STRING(50)
      },
      regionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {         // orderDetails hasMany order
          model: {
            tableName: "region",
            field: "regionId"
          },
          key: 'regionId'
        },
        onDelete: 'CASCADE'
      }
    }
  );


  Territories.associate = function (models) {
    Territories.belongsToMany(models.employees, { through: 'employeeTerritories' }); // , foreignKey: 'territoryId'
    Territories.hasMany(models.region, { foreignKey: 'regionId' });
  };

  // Territories.associate = function (models) {
  // };

  return Territories;
}

export default Territories;
