require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models')
const cors =require('cors')
const PORT = process.env.PORT || 5000
const router = require('./rotes/index')
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)
app.get('/', (req, res) => {
    res.status(200).json({message: 'helo'})
})

const start = async () => {
    try {

        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('11'))
    } catch (e) {
        console.log(e)
    }
}
start()