import React, { createContext, useContext, ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { Product, CartItem } from '../types';
import { useNotification } from './NotificationContext';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart', []);
  const { addNotification } = useNotification();

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + (item.salePrice ?? item.price) * item.quantity, 0);

  const addToCart = (product: Product, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        const newQuantity = Math.min(existingItem.quantity + quantity, product.stock);
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
    addNotification(`${product.name} added to cart!`, 'success');
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    addNotification(`Item removed from cart.`, 'info');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: Math.max(1, Math.min(quantity, item.stock)) } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    addNotification(`Cart cleared.`, 'info');
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
