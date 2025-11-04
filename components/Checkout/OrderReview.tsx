
import React from 'react';
import { ShippingInfo } from '../../types';
import { useCart } from '../../contexts/CartContext';

interface OrderReviewProps {
    shippingInfo: ShippingInfo;
    paymentMethod: string;
    onPlaceOrder: () => void;
    onBack: () => void;
}

const InfoSection: React.FC<{title: string, children: React.ReactNode}> = ({ title, children }) => (
    <div>
        <h3 className="text-xl font-extrabold text-black border-b-2 border-black pb-2 mb-3">{title}</h3>
        <div className="text-gray-700 space-y-1">
            {children}
        </div>
    </div>
);

const OrderReview: React.FC<OrderReviewProps> = ({ shippingInfo, paymentMethod, onPlaceOrder, onBack }) => {
    const { cartItems, subtotal } = useCart();
    const shippingCost = subtotal > 1500 ? 0 : 60;
    const total = subtotal + shippingCost;

    return (
         <div className="bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_#000] p-8">
             <h2 className="text-2xl font-extrabold text-black mb-6">Review Your Order</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="space-y-6">
                     <InfoSection title="Shipping To">
                         <p className="font-semibold">{shippingInfo.fullName}</p>
                         <p>{shippingInfo.address}</p>
                         <p>{shippingInfo.area}, {shippingInfo.city}</p>
                         <p>Phone: {shippingInfo.phone}</p>
                     </InfoSection>
                      <InfoSection title="Payment Method">
                         <p className="font-semibold">{paymentMethod}</p>
                     </InfoSection>
                 </div>
                 <div>
                    <h3 className="text-xl font-extrabold text-black border-b-2 border-black pb-2 mb-3">Order Summary</h3>
                    <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex justify-between items-start">
                                <div>
                                    <p className="font-bold">{item.name} <span className="font-normal text-gray-600">x {item.quantity}</span></p>
                                </div>
                                <p className="font-semibold whitespace-nowrap">৳{( (item.salePrice ?? item.price) * item.quantity).toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                     <div className="space-y-2 border-t-2 border-dashed border-black mt-4 pt-4">
                        <div className="flex justify-between font-semibold">
                            <span>Subtotal</span>
                            <span>৳{subtotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                            <span>Shipping</span>
                            <span>{shippingCost === 0 ? 'Free' : `৳${shippingCost}`}</span>
                        </div>
                        <div className="flex justify-between font-extrabold text-xl border-t-2 border-black pt-2 mt-2">
                            <span>Total</span>
                            <span>৳{total.toLocaleString()}</span>
                        </div>
                     </div>
                 </div>
             </div>
             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button type="button" onClick={onBack} className="w-full bg-gray-200 text-black font-bold text-lg py-3 px-6 border-2 border-black rounded-lg shadow-[6px_6px_0px_#000] hover:bg-gray-300 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[8px_8px_0px_#000] transition-all duration-200">
                    Back to Payment
                </button>
                <button onClick={onPlaceOrder} className="w-full bg-green-500 text-white font-bold text-lg py-3 px-6 border-2 border-black rounded-lg shadow-[6px_6px_0px_#000] hover:bg-green-600 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[8px_8px_0px_#000] transition-all duration-200">
                    Place Order
                </button>
            </div>
         </div>
    );
};

export default OrderReview;