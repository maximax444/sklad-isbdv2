const Router = require('express')
const router = new Router()

const supController = require('../controllers/supController')

router.get('/', supController.getAll)
router.post('/add', supController.create)

module.exports = router