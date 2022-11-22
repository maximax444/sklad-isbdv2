import Products from "./pages/products";
import Orders from "./pages/orders";
import Suppliers from "./pages/suppliers";
import Employeers from "./pages/employeers";

export const myRoutes = [
    {
        path: '/',
        Component: Products
    },
    {
        path: '/orders',
        Component: Orders,
    },
    {
        path: '/suppliers',
        Component: Suppliers
    },
    {
        path: '/employeers',
        Component: Employeers
    }
]