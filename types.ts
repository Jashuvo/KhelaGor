
export interface Category {
  name: string;
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  category: string;
  brand: string;
  imageUrl: string;
  images?: string[];
  stock: number;
  rating: number;
  reviewCount: number;
  ageGroup: string;
  availability: string;
  specifications: {
    [key: string]: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  title: string;
  text: string;
  date: string;
  isVerified: boolean;
}

export interface ShippingInfo {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  area: string;
  notes?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

export type OrderStatus = 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';

export interface Order {
  id: string;
  date: string;
  customer: Pick<User, 'id' | 'name' | 'email'>;
  items: CartItem[];
  shippingInfo: ShippingInfo;
  subtotal: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  paymentMethod: string;
  paymentVerified: boolean;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface Notification {
    id: string;
    title: string;
    message: string;
    date: string;
    read: boolean;
    link?: string;
}
