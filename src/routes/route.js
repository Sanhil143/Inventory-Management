const router = require('express')()
const { createItem, fetchItem, updateItem } = require('../controllers/itemController')


//items
router.post('/createItems', createItem)
router.get('/fetchItems', fetchItem)
router.put('/updateItems/:itemId', updateItem)
   
module.exports = router 