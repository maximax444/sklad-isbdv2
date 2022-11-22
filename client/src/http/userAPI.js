import {$host} from "./index";

export const addEmp = async (job, name1, name2, name3, adress, phone) => {
    const response = await $host.post('api/emp/add', {job, name1, name2, name3, adress, phone});
    return response
}
export const fetchEmp = async () => {
    const {data} = await $host.get('api/emp')
    return data
}

export const addSup = async (name, adress, phone) => {
    const response = await $host.post('api/sup/add', {name, adress, phone});
    return response
}
export const fetchSup = async () => {
    const {data} = await $host.get('api/sup')
    return data
}

export const addProd = async (idSup, name, brand, price, bbd, mc, mn) => {
    const response = await $host.post('api/prod/add', {idSup, name, brand, price, bbd, mc, mn});
    return response
}
export const fetchProd = async () => {
    const {data} = await $host.get('api/prod')
    return data
}

export const addOrder = async (prods, client, emp, d1, d2) => {
    const response = await $host.post('api/orders/add', {prods, client, emp, d1, d2});
    return response
}
export const fetchOrders = async () => {
    const {data} = await $host.get('api/orders')
    return data
}
export const fetchOrdered = async () => {
    const {data} = await $host.get('api/orders/ord')
    return data
}