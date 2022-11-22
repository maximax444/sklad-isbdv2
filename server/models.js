const sequelize = require('./db')
const {DataTypes} = require('sequelize')
const Products = sequelize.define('products', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_return_products: {type: DataTypes.INTEGER},
    id_suppliers: {type: DataTypes.INTEGER},
    name: {type: DataTypes.STRING},
    brand: {type: DataTypes.STRING},
    price: {type: DataTypes.STRING},
    best_before_date: {type: DataTypes.DATE},
    manufacturers_country: {type: DataTypes.STRING},
    manufacrurers_name: {type: DataTypes.STRING},
});
const Employees = sequelize.define('employees', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    positions: {type: DataTypes.STRING},
    first_name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    patronymic: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    number_phone: {type: DataTypes.STRING},
});
const Suppliers = sequelize.define('suppliers', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    number_phone: {type: DataTypes.STRING},
});
const Orders = sequelize.define('orders', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_ordered: {type: DataTypes.INTEGER},
    id_client: {type: DataTypes.INTEGER},
    id_supplier: {type: DataTypes.INTEGER},
    id_delivery: {type: DataTypes.INTEGER},
    id_employees: {type: DataTypes.INTEGER},
    id_form_of_payment: {type: DataTypes.INTEGER},
    id_wr_pr: {type: DataTypes.INTEGER},
    shipping_date: {type: DataTypes.DATE},
    departure_date: {type: DataTypes.DATE},
});
const Ordered = sequelize.define('ordered', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_product: {type: DataTypes.INTEGER},
    id_orders: {type: DataTypes.INTEGER},
    price: {type: DataTypes.STRING},
    amount: {type: DataTypes.STRING},
    discount: {type: DataTypes.INTEGER},
});
const Supplies = sequelize.define('supplies', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_shops: {type: DataTypes.INTEGER},
    sum_suply: {type: DataTypes.STRING},
    date_suply: {type: DataTypes.DATE},
});
const ReturnProducts = sequelize.define('return_products', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.STRING},
    amount: {type: DataTypes.STRING},
    date_return: {type: DataTypes.DATE},
});
const Shops = sequelize.define('shops', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    number_phone: {type: DataTypes.STRING},
});
const FormOfPayment = sequelize.define('form_of_payment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
});
const Delivery = sequelize.define('delivery', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    price: {type: DataTypes.STRING},
    number_phone: {type: DataTypes.STRING},
});
const Clients = sequelize.define('clients', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    patronymic: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    number_phone: {type: DataTypes.STRING},
});

Products.hasOne(ReturnProducts)
ReturnProducts.belongsTo(Products)

Products.hasOne(Suppliers)
Suppliers.belongsTo(Products)

Ordered.hasOne(Orders)
Orders.belongsTo(Ordered)

Ordered.hasOne(Products)
Products.belongsTo(Ordered)

Orders.hasOne(Clients)
Clients.belongsTo(Orders)
Orders.hasOne(Delivery)
Delivery.belongsTo(Orders)
Orders.hasOne(Employees)
Employees.belongsTo(Orders)
Orders.hasOne(Supplies)
Supplies.belongsTo(Orders)
Supplies.hasOne(Shops)
Shops.belongsTo(Supplies)
Orders.hasOne(FormOfPayment)
FormOfPayment.belongsTo(Orders)

module.exports = {
    Products,
    Employees,
    Suppliers,
    Orders,
    Ordered,
    Supplies,
    ReturnProducts,
    Shops,
    FormOfPayment,
    Delivery,
    Clients
}