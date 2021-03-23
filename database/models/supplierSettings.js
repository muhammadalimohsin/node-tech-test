const SupplierSettings = (sequelize, DataTypes) => {
  const SupplierSettings = sequelize.define(
    "supplierSettings",
    {
      supplierId: {
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER
      },
      lossThreshold: {
        type: DataTypes.INTEGER
      },
      shipingDays: {
        type: DataTypes.INTEGER
      },
      handlingTime: {
        type: DataTypes.INTEGER
      },
      defaultStock: {
        type: DataTypes.INTEGER
      },
      autoOrderingStrategy: {
        type: DataTypes.STRING(150)
      },
      refreshers: {
        type: DataTypes.STRING(150)
      },
      sellerReviews: {
        type: DataTypes.INTEGER
      },
      feedbackCount: {
        type: DataTypes.INTEGER
      }
    }
  );

  return SupplierSettings;
}

export default SupplierSettings;
