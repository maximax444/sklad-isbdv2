const Router = require('express')
const router = new Router()

const prodController = require('../controllers/prodController')

router.get('/', prodController.getAll)
router.post('/add', prodController.create)

module.exports = router