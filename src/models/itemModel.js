module.exports = (sequelize,DataTypes) => {
      const Item = sequelize.define('items',{
            productName:{
                  type:DataTypes.STRING,
                  unique:true,
                  allowNull:false
            },
            quantity:{
                  type:DataTypes.INTEGER,
                  allowNull:false
            },
            stockPrice:{
                  type:DataTypes.INTEGER,
                  allowNull:false
            },
            sellPrice:{
                  type:DataTypes.INTEGER,
                  allowNull:false
            },
            isDeleted:{
                  type: DataTypes.BOOLEAN,
                  defaultValue:false
            },
            deletedAt:{
                  type:DataTypes.DATE,
                  defaultValue:null
            },
      },{
            tableName:'items',
            timestamps:true
      })
      return Item
}



// { id,createdAt, updatedAt,deleted, 
// productName(unique), quantity, stockPrice, sellPrice }