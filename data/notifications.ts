import { Notification } from "../types";

export const NOTIFICATIONS: Notification[] = [
    {
        id: '1',
        title: 'Order Shipped!',
        message: 'Your order #KG-1698151234 has been shipped and is on its way.',
        date: '2023-10-24',
        read: false,
        link: '#/track-order?id=KG-1698151234'
    },
    {
        id: '2',
        title: 'Weekend Flash Sale!',
        message: 'Get 20% off on all LEGO sets this weekend. Don\'t miss out!',
        date: '2023-10-22',
        read: false,
        link: '#/products?category=Puzzles'
    },
    {
        id: '3',
        title: 'Welcome to KhelaGhor!',
        message: 'Thank you for creating an account with us. Happy shopping!',
        date: '2023-10-21',
        read: true,
        link: '#/account'
    }
];
