const Region = (sequelize, DataTypes) => {
  const Region = sequelize.define(
    "region",
    {
      regionId: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true
      },
      regionDescription: {
        type: DataTypes.STRING(50)
      }
    }
  );

  return Region;
}

export default Region;
