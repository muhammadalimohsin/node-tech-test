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

  UserEmails.associate = function (models) {
    UserEmails.belongsTo(models.users);
  };

  return UserEmails;
}

export default UserEmails;
