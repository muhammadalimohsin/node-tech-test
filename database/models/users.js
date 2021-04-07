const Users = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "users",
    {
      name: {
        type: DataTypes.STRING(200)
      },
      loginEmail: {
        type: DataTypes.STRING(100)
      },
      loginPassword: {
        type: DataTypes.STRING(100)
      },
      status: {
        type: DataTypes.STRING(100)
      }
    }
  );

  return Users;
}

export default Users;
