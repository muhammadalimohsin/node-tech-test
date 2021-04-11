const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    "products",
    {
      productId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true
      },
      productName: {
        type: DataTypes.STRING(40)
      },
      supplierId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {         // orderDetails hasMany order
          model: {
            tableName: "suppliers",
            field: "supplierId"
          },
          key: 'supplierId'
        }
      },
      catagoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {         // orderDetails hasMany order
          model: {
            tableName: "catagories",
            field: "catagoryId"
          },
          key: 'catagoryId'
        }
      },
      quantityPerUnit: {
        type: DataTypes.STRING(20)
      },
      unitPrice: {
        type: DataTypes.DOUBLE(15,4)
      },
      unitInStock: {
        type: DataTypes.INTEGER
      },
      unitOnOrder: {
        type: DataTypes.INTEGER
      },
      reorderLevel: {
        type: DataTypes.INTEGER
      },
      discontinued: {
        type: DataTypes.INTEGER
      }
    }
  );

  Products.associate = function (models) {
    Products.hasMany(models.suppliers, { foreignKey: 'suppliersId' });
    // Products.hasMany(models.catagories, { foreignKey: 'catagoryId' });
  };

  return Products;
}

export default Products;
