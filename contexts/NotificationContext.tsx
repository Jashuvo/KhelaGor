import { createContext, useContext } from 'react';

type ToastType = 'success' | 'error' | 'info';

interface NotificationContextType {
  addNotification: (message: string, type: ToastType) => void;
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
