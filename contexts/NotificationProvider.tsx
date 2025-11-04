import React, { useState, useCallback, ReactNode } from 'react';
import { NotificationContext } from './NotificationContext';
import Toast from '../components/Toast';

interface ToastMessage {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addNotification = useCallback((message: string, type: 'success' | 'error' | 'info') => {
    const id = Date.now();
    setToasts(prevToasts => [...prevToasts, { id, message, type }]);
  }, []);

  const removeToast = (id: number) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <div className="fixed top-24 right-5 z-50 space-y-2">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </NotificationContext.Provider>
  );
};
