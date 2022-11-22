// app.post('/api/emp/add', (req,res) => {
//     res.status(200).json({message: req[0]})
// })

const {Employees} = require('../models')

class EmpController {
    async create(req, res, next) {
        try {

            let {job, name1, name2, name3, adress, phone} = req.body
            let emp = await Employees.create({
                positions: job,
                    first_name: name1,
                    surname: name2,
                    patronymic: name3,
                    address: adress,
                    number_phone: phone
                });

            return res.json(emp)
        } catch (e) {
            console.log(e)
        }

    }

    async getAll(req, res) {
        let emp = await Employees.findAndCountAll()
        return res.json(emp)
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

module.exports = new EmpController()