import React from 'react';
import { useCart } from '../contexts/CartContext';
import Link from './Link';

const CartSummary: React.FC = () => {
  const { subtotal } = useCart();
  const shippingCost = subtotal > 1500 ? 0 : 60; // Example logic: Free shipping over ৳1,500
  const total = subtotal + shippingCost;

  return (
    <div className="bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_#000] p-6 sticky top-28">
      <h2 className="text-2xl font-extrabold text-black mb-6 border-b-2 border-black pb-4">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between font-semibold text-gray-800">
          <span>Subtotal</span>
          <span>৳{subtotal.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex justify-between font-semibold text-gray-800">
          <span>Shipping</span>
          <span>{shippingCost === 0 ? 'Free' : `৳${shippingCost.toLocaleString('en-IN')}`}</span>
        </div>
        <div className="flex justify-between font-extrabold text-xl text-black border-t-2 border-dashed border-black pt-4 mt-4">
          <span>Total</span>
          <span>৳{total.toLocaleString('en-IN')}</span>
        </div>
      </div>
      <Link
        to="#/checkout"
        className="mt-6 block w-full bg-blue-500 text-white font-bold text-center text-lg py-3.5 px-6 border-2 border-black rounded-lg shadow-[6px_6px_0px_#000] hover:bg-blue-600 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[8px_8px_0px_#000] transition-all duration-200"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default CartSummary;