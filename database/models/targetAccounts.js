const TargetAccounts = (sequelize, DataTypes) => {
  const TargetAccounts = sequelize.define(
    "targetAccounts",
    {
      userId: {
        type: DataTypes.INTEGER
      },
      userEmailId: {
        type: DataTypes.INTEGER
      },
      creditCardId: {
        type: DataTypes.INTEGER
      },
      password: {
        type: DataTypes.STRING(100)
      },
      marketPlace: {
        type: DataTypes.ENUM('walmart', 'amazon')
      },
      '2fa_Secret': {
        type: DataTypes.STRING(100),
        unique: true
      },
      prime: {
        type: DataTypes.BOOLEAN
      },
      blocked: {
        type: DataTypes.BOOLEAN
      },
      blockedReason: {
        type: DataTypes.STRING(300)
      },
      locked: {
        type: DataTypes.BOOLEAN
      },
      admin: {
        type: DataTypes.BOOLEAN
      },
    }
  );

  return TargetAccounts;
}

export default TargetAccounts;
