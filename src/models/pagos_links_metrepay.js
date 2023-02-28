module.exports = (sequelize, DataType) => {
  const Pagos_links_metrepay = sequelize.define("Pagos_links_metrepay", {
    registroId: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // Es el numero de ticket MP que se visualiza en el portal de Metrepay
    // id
    payRequestId: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    currency: {
      type: DataType.STRING,
      allowNull: true,
    },
    amount: {
      type: DataType.STRING,
      allowNull: false,
    },
    statusId: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    // LINK del pago
    publicPayUrl: {
      type: DataType.STRING,
      allowNull: false,
    },
    // Este podría ser el número de socio o el número de cédula
    customIdentifier: {
      type: DataType.STRING,
      allowNull: false,
    },
  });

  Pagos_metrepay.associate = (models) => {
    Pagos_metrepay.belongsTo(models.Users, {
      foreignKey: {
        name: "user_id",
        allowNull: true,
        defaultValue: 1,
      },
    });
  };

  return Pagos_links_metrepay;
};
