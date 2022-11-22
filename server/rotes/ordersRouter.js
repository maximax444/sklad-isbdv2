const Router = require('express')
const router = new Router()

const ordersController = require('../controllers/ordersController')

router.get('/', ordersController.getAll)
router.get('/ord', ordersController.getOrdered)
router.post('/add', ordersController.create)

module.exports = router