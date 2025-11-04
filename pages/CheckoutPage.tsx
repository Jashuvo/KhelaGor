import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { ShippingInfo } from '../types';
import ProgressIndicator from '../components/Checkout/ProgressIndicator';
import ShippingForm from '../components/Checkout/ShippingForm';
import PaymentOptions from '../components/Checkout/PaymentOptions';
import OrderReview from '../components/Checkout/OrderReview';

const CheckoutPage: React.FC = () => {
    const [step, setStep] = useState(1);
    const { clearCart } = useCart();
    const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
        fullName: '',
        phone: '',
        address: '',
        city: 'Dhaka',
        area: '',
    });
    const [paymentMethod, setPaymentMethod] = useState('COD');
    
    const handleShippingSubmit = (data: ShippingInfo) => {
        setShippingInfo(data);
        setStep(2);
    };
    
    const handlePaymentSubmit = (method: string) => {
        setPaymentMethod(method);
        setStep(3);
    };

    const handlePlaceOrder = () => {
        const orderId = `KG-${Date.now()}`;
        console.log("Order Placed!", { orderId, shippingInfo, paymentMethod });
        // In a real app, you would send this to a server.
        clearCart();
        window.location.hash = `#/order-success?id=${orderId}`;
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <ShippingForm initialData={shippingInfo} onSubmit={handleShippingSubmit} />;
            case 2:
                return <PaymentOptions selectedMethod={paymentMethod} onSubmit={handlePaymentSubmit} onBack={() => setStep(1)} />;
            case 3:
                return <OrderReview shippingInfo={shippingInfo} paymentMethod={paymentMethod} onPlaceOrder={handlePlaceOrder} onBack={() => setStep(2)} />;
            default:
                return <ShippingForm initialData={shippingInfo} onSubmit={handleShippingSubmit} />;
        }
    };
    
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-4xl font-extrabold text-black text-center mb-8">Checkout</h1>
            <div className="max-w-2xl mx-auto mb-8">
                <ProgressIndicator currentStep={step} />
            </div>
            {renderStep()}
        </div>
    );
};

export default CheckoutPage;
