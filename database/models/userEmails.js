const UserEmails = (sequelize, DataTypes) => {
  const UserEmails = sequelize.define(
    "userEmails",
    {
      userId: {
        type: DataTypes.INTEGER
      },
      email: {
        type: DataTypes.STRING(100),
        unique: true
      }
    }
  );

  return UserEmails;
}

export default UserEmails;
