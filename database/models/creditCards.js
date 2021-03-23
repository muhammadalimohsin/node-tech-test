const CreditCards = (sequelize, DataTypes) => {
  const CreditCards = sequelize.define(
    "creditCards",
    {
      userId: {
        type: DataTypes.STRING(70)
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

  return CreditCards;
}

export default CreditCards;
