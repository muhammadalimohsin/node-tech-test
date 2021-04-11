const Catagories = (sequelize, DataTypes) => {
  const Catagories = sequelize.define(
    "catagories",
    {
      catagoryId: {
        type: DataTypes.INTEGER,
        unique: true,
        primaryKey: true
      },
      catagoryName: {
        type: DataTypes.STRING(15)
      },
      description: {
        type: DataTypes.TEXT
      },
      picture: {
        type: DataTypes.BLOB
      }
    }
  );

  return Catagories;
}

export default Catagories;
