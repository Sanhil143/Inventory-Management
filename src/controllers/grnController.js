const db = require('../database/mysqlConnec')

const Grns = db.grns
const Items = db.items

const createGrn = async (req,res) => {
      let data = req.body
      updatedata = await Grns.create(data)
      return res.status(201).send({status:true, message:"Grn created successfully", data:updatedata})
}

module.exports = {createGrn}