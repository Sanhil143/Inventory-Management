const router = require('express')()
const { createItem, fetchItem, updateItem, deleteItem } = require('../controllers/itemController')


//items
router.post('/createItems', createItem)
router.get('/fetchItems', fetchItem)
router.put('/updateItems/:itemId', updateItem)
router.delete('/deleteItems/:itemId', deleteItem)
   
module.exports = router 