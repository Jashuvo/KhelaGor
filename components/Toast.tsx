
import React, { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose?: () => void;
  duration?: number;
}

const typeClasses = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-blue-500',
};

const Toast: React.FC<ToastProps> = ({ message, type, onClose, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) {
        onClose();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div className={`fixed top-5 right-5 z-50 text-white px-6 py-3 rounded-lg shadow-lg flex items-center animate-fade-in-down ${typeClasses[type]}`}>
      <span>{message}</span>
      <button onClick={() => setVisible(false)} className="ml-4 font-bold text-xl">&times;</button>
    </div>
  );
};

export default Toast;
