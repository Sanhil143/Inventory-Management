module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('orders', {
        customerName: {
            type: DataTypes.STRING,
            allownull: false
        },
        customerFullAddress: {
            type: DataTypes.STRING,
            allownull: false
        },
        invoiceNumber:{
            type:DataTypes.INTEGER,
            allownull:false
        },
        status: {
            type: DataTypes.ENUM("GENERATED", "COMPLETED", "CANCELLED"),
            defaultValue:"GENERATED"

        },
        orderLineItems:{
            type: DataTypes.JSON,
             defaultValue: [] 
        }, 
        isDeleted:{
            type: DataTypes.BOOLEAN,
            defaultValue:false
      },
      deletedAt:{
            type:DataTypes.DATE,
            defaultValue:null
      },
    }, {
        tableName: 'orders',
        timestamps: true
    })
    return Order;
}

// {id,createdAt, updatedAt,deleted,status(GENERATED, COMPLETED,CANCELLED),  
//       invoiceNumber, customerName, customerFullAddress,
//        orderLineItems: orderLIneItem[], date}