module.exports = (sequelize, DataType) => {
  const Pagos_metrepay = sequelize.define("Pagos_metrepay", {
    registroId: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    txId: {
      type: DataType.STRING,
      allowNull: true,
    },
    payRequestId: {
      // Es el numero de ticket MP que se visualiza en el portal de Metrepay
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
    // Este podría ser el número de socio o el número de cédula
    customIdentifier: {
      type: DataType.STRING,
      allowNull: false,
    },
    label: {
      type: DataType.STRING,
      allowNull: true,
    },
    // Qué número de cuota fue la pagada (entre las totales programadas vía MetrePay)
    subscriptionPayedPeriod: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    // Cantidad total de cuotas programadas por MetrePay
    subscriptionTotalPeriods: {
      type: DataType.INTEGER,
      allowNull: true,
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

  return Pagos_metrepay;
};
