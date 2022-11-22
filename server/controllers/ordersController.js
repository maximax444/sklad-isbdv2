const {Orders, Clients, Ordered} = require('../models')
const {DataTypes} = require("sequelize");

class OrdersController {
    async create(req, res, next) {
        try {

            let {prods, client, emp, d1, d2} = req.body
            let cl = await Clients.create({
                name: client
            });
            let prod = await Orders.create({
                id_client: cl.getDataValue('id'),
                id_employees: emp,
                shipping_date: new Date(d1),
                departure_date: new Date(d2)
            });
            prods.forEach(i =>
                Ordered.create({
                    id_product: i + 1,
                    id_orders: prod.getDataValue('id')
                })
            )
            console.log(prods)
            return res.json(prod)
        } catch (e) {
            console.log(e)
        }

    }

    async getAll(req, res) {
        let prod = await Orders.findAndCountAll()
        return res.json(prod)
    }
    async getOrdered(req, res) {
        let prod = await Ordered.findAndCountAll()
        return res.json(prod)
    }

    // async getOne(req, res) {
    //     const {id} = req.params
    //     const device = await Device.findOne(
    //         {
    //             where: {id},
    //             include: [{model: DeviceInfo, as: 'info'}]
    //         },
    //     )
    //     return res.json(device)
    // }
}

module.exports = new OrdersController()