const db = require('../database/mysqlConnec')
const { isValidString, isValidNum } = require('../validations/validation')

Items = db.items

const createItem = async (req, res) => {
      try {
      let data = req.body
      const {productName, stockPrice, sellPrice} = data
      if(productName){
            let proName = await Items.findOne({ where: { productName: productName } })
            if (proName) {
                  return res.status(400).send({ status: false, message: "Name is already exist" })
            }
            if (!isValidString(productName)) {
                  return res.status(400).send({ status: false, message: "Please provide valid product name" })
            }
      }
      if (sellPrice) {
            if (!sellPrice) {
                  return res.status(400).send({ status: false, message: "Please provide valid sellPrice" })
            }
            if (!isValidNum(sellPrice)) {
                  return res.status(400).send({ status: false, message: "Please provide valid sellPrice" })
            }
      }
      if (stockPrice) {
            if (!stockPrice) {
                  return res.status(400).send({ status: false, message: "Please provide valid stockPrice" })
            }
            if (!isValidNum(stockPrice)) {
                  return res.status(400).send({ status: false, message: "Please provide valid stockPrice" })
            }
      }
      let storeData = await Items.create(data)
      return res.status(201).send({ status: true, data: storeData })
}
catch (err) {
      return res.status(500).send({ status: false, error: err.message })
}
}

const fetchItem = async (req, res) => {
      try {
            let fetchData = await Items.findAll({})
            return res.status(200).send({ status: true, data: fetchData })
      }
      catch (err) {
            return res.status(500).send({ status: false, error: err.message })
      }
}

const updateItem = async (req, res) => {
      try {
            let itemId = req.params.itemId
            let data = req.body

            if (!itemId || !isValidNum(itemId)) {
                  return res.status(400).send({ status: false, message: "Please enter valid itemId!" })
            }
            const { productName, sellPrice, stockPrice } = data

            if (productName) {
                  let proName = await Items.findOne({ where: { productName: productName } })
                  if (proName) {
                        return res.status(400).send({ status: false, message: "Name is already exist" })
                  }
                  if (!isValidString(productName)) {
                        return res.status(400).send({ status: false, message: "Please provide valid product name" })
                  }
            }
            if (sellPrice) {
                  if (!isValidNum(sellPrice)) {
                        return res.status(400).send({ status: false, message: "Please provide valid sellPrice" })
                  }
            }
            if (stockPrice) {
                  if (!isValidNum(stockPrice)) {
                        return res.status(400).send({ status: false, message: "Please provide valid stockPrice" })
                  }
            }

            let updatedData = await Items.update(data, { where: { id: itemId } })
            if (updatedData === null) {
                  return res.status(400).send({ status: false, message: "Please enter valid item Id" })
            }
            return res.status(200).send({ status: true, message: "update successfully", data: updatedData })
      }
      catch (err) {
            return res.status(500).send({ status: false, error: err.message })
      }
}
const deleteItem = async (req, res) => {
      try {
            let itemId = req.params.itemId

            if (!itemId || !isValidNum(itemId)) {
                  return res.status(400).send({ status: false, message: "Please enter valid item Id" })
            }
            let deleteData = await Items.findOne({ where: { id: itemId } })
            if (!deleteData) {
                  return res.status(404).send({ status: false, message: "data not found to be deleted" })
            }
            if (deleteData.isDeleted.toString() === "true") {
                  return res.status(400).send({ status: false, message: "item is already deleted" })
            }
            await Items.update({ isDeleted: true, deletedAt: Date.now() }, { where: { id: itemId } })
            return res.status(200).send({ status: true, message: "deleted successfully" })
      }
      catch (err) {
            return res.status(500).send({ status: false, error: err.message })
      }
}

module.exports = { createItem, fetchItem, updateItem, deleteItem }