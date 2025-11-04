
import { Order, Product } from '../types';

export const ADMIN_STATS = {
    totalRevenue: {
        value: '৳5,42,300',
        change: 12.5,
    },
    totalSales: {
        value: '1,250',
        change: 8.2,
    },
    newCustomers: {
        value: '82',
        change: -2.1,
    },
    pendingOrders: {
        value: '15',
    },
};

export const SALES_CHART_DATA = [
    { name: 'Jan', sales: 40000 },
    { name: 'Feb', sales: 30000 },
    { name: 'Mar', sales: 50000 },
    { name: 'Apr', sales: 45000 },
    { name: 'May', sales: 60000 },
    { name: 'Jun', sales: 55000 },
    { name: 'Jul', sales: 70000 },
];

export const ORDER_STATUS_PIE_DATA = [
    { name: 'Delivered', value: 400, fill: '#22c55e' },
    { name: 'Shipped', value: 80, fill: '#3b82f6' },
    { name: 'Pending', value: 35, fill: '#f97316' },
    { name: 'Cancelled', value: 20, fill: '#ef4444' },
];

export const RECENT_ORDERS: Omit<Order, 'items' | 'shippingInfo'>[] = [
    {
        id: 'KG-1698156789',
        date: '2023-10-24',
        customer: { id: 'u1', name: 'Anika Rahman', email: 'anika@example.com' },
        subtotal: 8499,
        shipping: 0,
        total: 8499,
        status: 'Delivered',
        paymentMethod: 'Card',
        paymentVerified: true,
    },
    {
        id: 'KG-1698151234',
        date: '2023-10-24',
        customer: { id: 'u2', name: 'Fahim Ahmed', email: 'fahim@example.com' },
        subtotal: 1440,
        shipping: 60,
        total: 1500,
        status: 'Shipped',
        paymentMethod: 'COD',
        paymentVerified: false,
    },
    {
        id: 'KG-1698064890',
        date: '2023-10-23',
        customer: { id: 'u3', name: 'Sadia Islam', email: 'sadia@example.com' },
        subtotal: 3200,
        shipping: 0,
        total: 3200,
        status: 'Processing',
        paymentMethod: 'bKash',
        paymentVerified: true,
    },
    {
        id: 'KG-1698043210',
        date: '2023-10-23',
        customer: { id: 'u4', name: 'Kamal Hossain', email: 'kamal@example.com' },
        subtotal: 2500,
        shipping: 0,
        total: 2500,
        status: 'Pending',
        paymentMethod: 'COD',
        paymentVerified: false,
    },
    {
        id: 'KG-1697912345',
        date: '2023-10-21',
        customer: { id: 'u5', name: 'Nadia Chowdhury', email: 'nadia@example.com' },
        subtotal: 12000,
        shipping: 0,
        total: 12000,
        status: 'Cancelled',
        paymentMethod: 'Card',
        paymentVerified: true,
    },
];


export const LOW_STOCK_PRODUCTS: Pick<Product, 'id' | 'name' | 'imageUrl' | 'stock' | 'category'>[] = [
    {
        id: '9',
        name: 'Radio Flyer Classic Red Wagon',
        imageUrl: 'https://i.ibb.co/xL3D3Yc/red-wagon.jpg',
        stock: 5,
        category: 'Outdoor'
    },
    {
        id: '3',
        name: 'Barbie Dreamhouse',
        imageUrl: 'https://i.ibb.co/7C9M0tQ/barbie-dreamhouse.jpg',
        stock: 8,
        category: 'Dolls'
    },
    {
        id: '15',
        name: 'Little Tikes First Slide',
        imageUrl: 'https://i.ibb.co/4T4S6mB/little-tikes-slide.jpg',
        stock: 10,
        category: 'Outdoor'
    },
     {
        id: '11',
        name: 'Jurassic World T-Rex Figure',
        imageUrl: 'https://i.ibb.co/wJ2Q959/jurassic-park-t-rex.jpg',
        stock: 12,
        category: 'Action Figures'
    },
];