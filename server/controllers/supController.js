const {Suppliers} = require('../models')

class SupController {
    async create(req, res, next) {
        try {

            let {name, adress, phone} = req.body
            let emp = await Suppliers.create({
                name: name,
                address: adress,
                number_phone: phone
            });

            return res.json(emp)
        } catch (e) {
            console.log(e)
        }

    }

    async getAll(req, res) {
        let sup = await Suppliers.findAndCountAll()
        return res.json(sup)
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

module.exports = new SupController()