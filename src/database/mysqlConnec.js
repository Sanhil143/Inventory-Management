const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('inventory_management', 'root', 'aashu@123',{
      host: 'localhost',
      dialect: 'mysql',
      logging: false
})
try{
      sequelize.authenticate();
      console.log("mysql DB is connected");
}catch(error){
      console.error("Database is dis-connected");
}

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize.sync({force:false})

db.items = require('../models/itemModel')(sequelize,DataTypes)
db.grns = require('../models/grnModel')(sequelize,DataTypes)
db.orders = require('../models/orderModel')(sequelize,DataTypes)
db.grnLineItems = require('../models/grnlineitemModel')(sequelize,DataTypes)
db.orderLineItems = require('../models/orderlineitemModel')(sequelize,DataTypes)


module.exports = db 


//one to many 
db.grns.hasOne(db.items,{foreignKey:'grn_id'})
db.grns.hasOne(db.grnLineItems,{foreignKey:'grn_id'})
db.grns.hasOne(db.orderLineItems,{foreignKey:'grn_id'})
db.grns.hasOne(db.orders,{foreignKey:'grn_id'})
db.orders.belongsTo(db.grns,{foreignKey:'grn_id'})
db.orderLineItems.belongsTo(db.grns,{foreignKey:'grn_id'})
db.items.belongsTo(db.grns,{foreignKey:'grn_id'})
db.grnLineItems.belongsTo(db.grns,{foreignKey:'grn_id'})

