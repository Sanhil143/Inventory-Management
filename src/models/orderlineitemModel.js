module.exports = (sequelize, DataTypes) => {
      const orderLineItem = sequelize.define('orderLineItems', {
            productName: {
                  type: DataTypes.STRING,
                  allowNull: false
            },
            quantity: {
                  type: DataTypes.INTEGER,
                  allowNull: false
            },
            sellPrice: {
                  type: DataTypes.INTEGER,
                  allowNull: false
            },
            isDeleted:{
                  type: DataTypes.BOOLEAN,
                  defaultValue:false
            },
            deletedAt:{
                  type:DataTypes.DATE,
                  defaultValue:null
            }
      },
      {
            tableName:'orderLineItems',
            timestamps:true
      })
      return orderLineItem
}








// {id,createdAt, updatedAt,deleted,  productName, quantity, sellPrice }