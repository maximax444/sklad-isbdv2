const Router = require('express')
const router = new Router()

const empController = require('../controllers/empController')

router.get('/', empController.getAll)
router.post('/add', empController.create)

module.exports = router