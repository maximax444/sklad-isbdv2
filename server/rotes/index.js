const Router = require('express')
const router = new Router()

const empRouter = require('./empRouter')
const supRouter = require('./supRouter')
const prodRouter = require('./prodRouter')
const ordersRouter = require('./ordersRouter')

router.use('/emp', empRouter)
router.use('/sup', supRouter)
router.use('/prod', prodRouter)
router.use('/orders', ordersRouter)

module.exports = router