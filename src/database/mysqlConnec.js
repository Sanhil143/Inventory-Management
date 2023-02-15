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


//one to one 
// db.customers.hasOne(db.orders,{foreignKey:'customer_id'})
// db.orders.belongsTo(db.customers,{foreignKey:'customer_id'})

