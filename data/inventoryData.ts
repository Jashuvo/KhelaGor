
import { Product } from "../types";
import { PRODUCTS } from "./products";

export const INVENTORY_STATS = {
    totalValue: {
        value: '৳1,250,000',
    },
    totalItems: {
        value: PRODUCTS.reduce((sum, p) => sum + p.stock, 0).toLocaleString(),
    },
    outOfStock: {
        value: PRODUCTS.filter(p => p.stock === 0).length,
    },
    lowStock: {
        value: PRODUCTS.filter(p => p.stock > 0 && p.stock < 10).length,
    }
};

export const DEAD_STOCK_PRODUCTS: (Pick<Product, 'id' | 'name' | 'stock' | 'category'> & { lastSoldDate: string })[] = [
    {
        id: '20',
        name: 'Classic Wooden Blocks',
        stock: 50,
        category: 'Educational',
        lastSoldDate: '2023-01-15'
    },
    {
        id: '18',
        name: 'Play-Doh Super Color Pack',
        stock: 35,
        category: 'Educational',
        lastSoldDate: '2023-02-01'
    }
];

export const DEMAND_FORECAST_DATA = [
    { name: 'Jan', actual: 400, forecast: 420 },
    { name: 'Feb', actual: 300, forecast: 310 },
    { name: 'Mar', actual: 500, forecast: 480 },
    { name: 'Apr', actual: 450, forecast: 460 },
    { name: 'May', actual: 600, forecast: 580 },
    { name: 'Jun', actual: 550, forecast: 560 },
];
