import React, { useState } from 'react';
import { NOTIFICATIONS } from '../../data/notifications';
import Link from '../Link';

const BellIcon = () => <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>;

const NotificationBell: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const unreadCount = NOTIFICATIONS.filter(n => !n.read).length;

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="relative text-gray-700 hover:text-blue-600">
                <BellIcon />
                {unreadCount > 0 && <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">{unreadCount}</span>}
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border-2 border-black rounded-lg shadow-lg z-20">
                    <div className="p-3 font-bold border-b-2 border-black">Notifications</div>
                    <div className="max-h-80 overflow-y-auto">
                        {NOTIFICATIONS.map(notification => (
                            <Link key={notification.id} to={notification.link || '#'} className="block p-3 hover:bg-yellow-100 border-b">
                                <p className={`font-semibold ${!notification.read ? 'text-black' : 'text-gray-600'}`}>{notification.title}</p>
                                <p className="text-sm text-gray-500">{notification.message}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotificationBell;
