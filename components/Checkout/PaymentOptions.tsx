import React, { useState } from 'react';

interface PaymentOptionsProps {
    selectedMethod: string;
    onSubmit: (method: string) => void;
    onBack: () => void;
}

const PaymentOption: React.FC<{id: string, name: string, description?: string, selected: boolean, onSelect: () => void}> = ({ id, name, description, selected, onSelect }) => (
    <label htmlFor={id} className={`flex items-center p-4 border-2 border-black rounded-lg cursor-pointer transition-all duration-200 ${selected ? 'bg-blue-200 border-blue-500 shadow-[4px_4px_0_#2563EB]' : 'bg-white hover:border-blue-300'}`}>
        <input type="radio" id={id} name="paymentMethod" checked={selected} onChange={onSelect} className="h-5 w-5 text-blue-600 border-black focus:ring-blue-500" />
        <div className="ml-4">
            <p className="font-bold">{name}</p>
            {description && <p className="text-sm text-gray-600">{description}</p>}
        </div>
    </label>
);

const PaymentOptions: React.FC<PaymentOptionsProps> = ({ selectedMethod, onSubmit, onBack }) => {
    const [method, setMethod] = useState(selectedMethod);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(method);
    }
    
    return (
        <div className="bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_#000] p-8">
            <h2 className="text-2xl font-extrabold text-black mb-6">Payment Method</h2>
            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <PaymentOption id="cod" name="Cash on Delivery (COD)" selected={method === 'COD'} onSelect={() => setMethod('COD')} />
                    <PaymentOption id="bkash" name="bKash" description="Pay to: 01XXXXXXXXX" selected={method === 'bKash'} onSelect={() => setMethod('bKash')} />
                    <PaymentOption id="nagad" name="Nagad" selected={method === 'Nagad'} onSelect={() => setMethod('Nagad')} />
                    <PaymentOption id="rocket" name="Rocket" selected={method === 'Rocket'} onSelect={() => setMethod('Rocket')} />
                    <PaymentOption id="card" name="Online Card Payment" description="Visa, MasterCard, Amex" selected={method === 'Card'} onSelect={() => setMethod('Card')} />
                </div>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <button type="button" onClick={onBack} className="w-full bg-gray-200 text-black font-bold text-lg py-3 px-6 border-2 border-black rounded-lg shadow-[6px_6px_0px_#000] hover:bg-gray-300 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[8px_8px_0px_#000] transition-all duration-200">
                        Back to Shipping
                    </button>
                    <button type="submit" className="w-full bg-blue-500 text-white font-bold text-lg py-3 px-6 border-2 border-black rounded-lg shadow-[6px_6px_0px_#000] hover:bg-blue-600 hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[8px_8px_0px_#000] transition-all duration-200">
                        Continue to Review
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PaymentOptions;