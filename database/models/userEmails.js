const UserEmails = (sequelize, DataTypes) => {
  const UserEmails = sequelize.define(
    "userEmails",
    {
      userId: {
        type: DataTypes.STRING(70)
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
