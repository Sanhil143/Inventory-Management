const db = require('../database/mysqlConnec')
const { isValidString, isValidNum } = require('../validations/validation')

Items = db.items

const createItem = async (req, res) => {
      let data = req.body
      let storeData = await Items.create(data)
      return res.status(201).send({ status: true, data: storeData })
}

const fetchItem = async (req, res) => {
      let fetchData = await Items.findAll({})
      return res.status(200).send({ status: true, data: fetchData })
}

const updateItem = async (req, res) => {
      try {
            let itemId = req.params.itemId
            let data = req.body

            if (!itemId) {
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
            return res.status(200).send({ status: true, message: "update successfully", data: updatedData })
      }
      catch (err) {
            return res.status(500).send({ status: false, error: err.message })
      }
}

module.exports = { createItem, fetchItem, updateItem }