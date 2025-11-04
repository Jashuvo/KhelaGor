import React, { useState } from 'react';
import { ShippingInfo } from '../../types';
import { DHAKA_LOCATIONS } from '../../data/locations';

interface ShippingFormProps {
    initialData: ShippingInfo;
    onSubmit: (data: ShippingInfo) => void;
}

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement> & {label: string}> = ({ label, ...props }) => (
     <div>
        <label className="block text-sm font-bold text-gray-700">{label}</label>
        <input {...props} className="mt-1 block w-full border-2 p-2.5 rounded-lg font-semibold border-black" />
    </div>
);

const ShippingForm: React.FC<ShippingFormProps> = ({ initialData, onSubmit }) => {
    const [formData, setFormData] = useState<ShippingInfo>(initialData);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_#000] p-8">
            <h2 className="text-2xl font-extrabold text-black mb-6">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <InputField label="Full Name" type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                <InputField label="Phone Number" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                <InputField label="Address (House, Road, etc.)" type="text" name="address" value={formData.address} onChange={handleChange} required />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700">City</label>
                        <select name="city" value={formData.city} onChange={handleChange} className="mt-1 block w-full border-2 p-2.5 rounded-lg font-semibold border-black bg-white">
                            <option>Dhaka</option>
                        </select>
                    </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-700">Area</label>
                        <select name="area" value={formData.area} onChange={handleChange} required className="mt-1 block w-full border-2 p-2.5 rounded-lg font-semibold border-black bg-white">
                            <option value="">Select an area</option>
                            {DHAKA_LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700">Order Notes (optional)</label>
                    <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} className="mt-1 block w-full border-2 p-2.5 rounded-lg font-semibold border-black" />
                </div>
                
                <div className="pt-4">
                    <button type="submit" className="w-full bg-blue-500 text-white font-bold text-lg py-3.5 px-6 border-2 border-black rounded-lg shadow-[6px_6px_0px_#000] hover:bg-blue-600">
                        Continue to Payment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ShippingForm;
