const router = require('express')()
const { createGrn } = require('../controllers/grnController')
const { createItem, fetchItem, updateItem, deleteItem } = require('../controllers/itemController')


//items
router.post('/createItems', createItem)
router.get('/fetchItems', fetchItem)
router.put('/updateItems/:itemId', updateItem)
router.delete('/deleteItems/:itemId', deleteItem)

//grns
router.post('/createGrns', createGrn)
   
module.exports = router 