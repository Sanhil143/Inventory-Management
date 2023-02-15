
module.exports = (sequelize, DataTypes) => {
      const grnLineItem = sequelize.define('grnLineItems', {
            productName: {
                  type: DataTypes.STRING,
                  allowNull: false
            },
            quantity: {
                  type: DataTypes.INTEGER,
                  allowNull: false
            },
            stockPrice: {
                  type: DataTypes.INTEGER,
                  allowNull: false
            },
            isDeleted: {
                  type: DataTypes.BOOLEAN,
                  defaultValue: false
            },
            deleteddAt: {
                  type: DataTypes.DATE,
                  defaultValue: null
            },
      }, {
            tableName: 'grnLineItems',
            timestamps: true
      })
      return grnLineItem
}




// {id,createdAt, updatedAt,deleted,  productName, quantity, stockPrice }