import React, { createContext, useContext, ReactNode, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { User } from '../types';
import { useNotification } from './NotificationContext';
import LoginModal from '../components/LoginModal';
import SignupModal from '../components/SignupModal';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => void;
  signup: (name: string, email: string, pass: string) => void;
  logout: () => void;
  isLoginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
  isSignupOpen: boolean;
  openSignup: () => void;
  closeSignup: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Dummy admin user
const ADMIN_USER: User = { id: 'admin', name: 'Admin User', email: 'admin@khelaghor.com', isAdmin: true };

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useLocalStorage<User | null>('user', null);
  const { addNotification } = useNotification();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const login = (email: string, pass: string) => {
    // Dummy login logic
    if (email === ADMIN_USER.email && pass === 'admin123') {
        setUser(ADMIN_USER);
        addNotification(`Welcome back, ${ADMIN_USER.name}!`, 'success');
        closeLogin();
        window.location.hash = '#/admin';
    } else if (pass === 'password123') {
        const newUser: User = { id: Date.now().toString(), name: email.split('@')[0], email, isAdmin: false };
        setUser(newUser);
        addNotification(`Welcome back, ${newUser.name}!`, 'success');
        closeLogin();
    } else {
        addNotification('Invalid email or password.', 'error');
    }
  };

  const signup = (name: string, email: string, pass: string) => {
    // Dummy signup logic
    const newUser: User = { id: Date.now().toString(), name, email, isAdmin: false };
    setUser(newUser);
    addNotification('Account created successfully! Welcome!', 'success');
    closeSignup();
  };

  const logout = () => {
    setUser(null);
    addNotification('You have been logged out.', 'info');
    window.location.hash = '#/';
  };

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);
  const openSignup = () => setIsSignupOpen(true);
  const closeSignup = () => setIsSignupOpen(false);

  return (
    <AuthContext.Provider value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        isLoginOpen,
        openLogin,
        closeLogin,
        isSignupOpen,
        openSignup,
        closeSignup
    }}>
      {children}
      <LoginModal />
      <SignupModal />
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
