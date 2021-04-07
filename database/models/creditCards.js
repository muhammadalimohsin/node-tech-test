const CreditCards = (sequelize, DataTypes) => {
  const CreditCards = sequelize.define(
    "creditCards",
    {
      userId: {
        type: DataTypes.INTEGER
      },
      cardHolderName: {
        type: DataTypes.STRING(100)
      },
      encryptedData: { // Card Number, CVC, Expiry Date
        type: DataTypes.STRING(300)
      },
      addressId: {
        type: DataTypes.INTEGER
      },
    }
  );

  CreditCards.associate = function (models) {
    CreditCards.belongsTo(models.users);
    CreditCards.belongsTo(models.addresses);
  };

  return CreditCards;
}

export default CreditCards;
