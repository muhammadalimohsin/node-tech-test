const Orders = (sequelize, DataTypes) => {
  const Orders = sequelize.define(
    "orders",
    {
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {         // orders hasMany customers
          model: {
            tableName: "orderDetails",
            field: "orderId"
          },
          key: 'orderId'
        },
        onDelete: 'CASCADE'
      },
      customerId: {
        type: DataTypes.STRING(5),
        allowNull: false,
        references: {         // orders hasMany customers
          model: {
            tableName: "customers",
            field: "customerId"
          },
          key: 'customerId'
        },
        onDelete: 'CASCADE'
      },
      employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {         // orders hasMany employees
          model: {
            tableName: "employees",
            field: "employeeId"
          },
          key: 'employeeId'
        },
        onDelete: 'CASCADE'
      },
      orderDate: {
        type: DataTypes.DATE
      },
      requiredDate: {
        type: DataTypes.DATE
      },
      shippedDate: {
        type: DataTypes.DATE
      },
      shipVia: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {         // orders hasMany shippers
          model: {
            tableName: "shippers",
            field: "shipperId"
          },
          key: 'shipperId'
        },
        onDelete: 'CASCADE'
      },
      freight: {
        type: DataTypes.DOUBLE(15,4)
      },
      shipName: {
        type: DataTypes.STRING(40)
      },
      shipAddress: {
        type: DataTypes.STRING(60)
      },
      shipCity: {
        type: DataTypes.STRING(15)
      },
      shipRegion: {
        type: DataTypes.STRING(15)
      },
      shipPostalCode: {
        type: DataTypes.STRING(10)
      },
      shipCountry: {
        type: DataTypes.STRING(15)
      }
    }
  );

  Orders.associate = function (models) {
    Orders.hasMany(models.customers, { foreignKey: 'customerId' });
    Orders.hasMany(models.employees, { foreignKey: 'employeeId' });
    Orders.hasMany(models.shippers, { foreignKey: 'shipVia' });
  };

  return Orders;
}

export default Orders;
