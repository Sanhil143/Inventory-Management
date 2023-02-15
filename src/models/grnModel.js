
module.exports = (sequelize, DataTypes) => {
    const Grn = sequelize.define('grns', {
        vendorName: {
            type: DataTypes.STRING,
            allownull: false
        },
        vendorFullAddress: {
            type: DataTypes.STRING,
            allownull: false
        },
        status: {
            type: DataTypes.ENUM("GENERATED", "COMPLETED", "CANCELLED"),
            defaultValue:'GENERATED'

        },
        grnlineItems:{ 
            type: DataTypes.JSON,
             defaultValue:[] 
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        deletedAt:{
            type:DataTypes.DATE,
            defaultValue:null
      },
    }, {
        tableName: 'grns',
        timestamps: true
    })
    return Grn
}

// status(GENERATED,COMPLETED, CANCELLED),
// invoiceNumber,
// vendorName,
// vendorFullAddress,
//  grnLineItems: grnLineItem[]
//  , date }