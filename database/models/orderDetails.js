const OrderDetails = (sequelize, DataTypes) => {
  const OrderDetails = sequelize.define(
    "orderDetails",
    {
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {         // orderDetails hasMany order
        //   model: {
        //     tableName: "orders",
        //     field: "orderId"
        //   },
        //   key: 'orderId'
        // },
        // onDelete: 'CASCADE'
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {         // orderDetails hasMany product
        //   model: {
        //     tableName: "products",
        //     field: "productId"
        //   },
        //   key: 'productId'
        // },
        // onDelete: 'CASCADE'
      },
      unitPrice: {
        type: DataTypes.DOUBLE(15,4)
      },
      discount: {
        type: DataTypes.INTEGER
      },
      quantity: {
        type: DataTypes.REAL
      }
    }
  );

  OrderDetails.associate = function (models) {
    OrderDetails.hasMany(models.orders, { foreignKey: 'orderId', });
    OrderDetails.hasMany(models.products, { foreignKey: 'productId' });
  };

  return OrderDetails;
}

export default OrderDetails;
