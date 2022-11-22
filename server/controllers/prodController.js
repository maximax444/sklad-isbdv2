const {Products} = require('../models')

class ProdController {
    async create(req, res, next) {
        try {

            let {idSup, name, brand, price, bbd, mc, mn} = req.body
            let prod = await Products.create({
                id_return_products: 1,
                id_suppliers: idSup,
                name: name,
                brand: brand,
                price: price,
                best_before_date: new Date(bbd),
                manufacturers_country: mc,
                manufacrurers_name: mn
            });
            console.log(prod)
            return res.json(prod)
        } catch (e) {
            console.log(e)
        }

    }

    async getAll(req, res) {
        let prod = await Products.findAndCountAll()
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

module.exports = new ProdController()