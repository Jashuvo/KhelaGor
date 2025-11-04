import React from 'react';
import Link from '../components/Link';

const AddressCard: React.FC<{ address: string, isDefault?: boolean }> = ({ address, isDefault }) => (
    <div className="bg-white p-6 border-2 border-black rounded-xl relative text-gray-800">
        {isDefault && <span className="absolute top-2 right-2 bg-yellow-300 text-black text-xs font-bold px-2 py-1 rounded-full">Default</span>}
        <p>{address}</p>
        <div className="mt-4 space-x-4">
            <button className="font-semibold text-blue-600 hover:underline">Edit</button>
            <button className="font-semibold text-red-600 hover:underline">Delete</button>
        </div>
    </div>
);

const AddressesPage: React.FC = () => {
    // Dummy data
    const addresses = [
        { id: '1', text: 'House 123, Road 45, Gulshan, Dhaka', isDefault: true },
        { id: '2', text: 'Work Office, Level 5, ABC Tower, Banani, Dhaka', isDefault: false },
    ];
    
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
             <h1 className="text-4xl font-extrabold text-black mb-8">My Addresses</h1>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <div className="space-y-6">
                        {addresses.map(addr => <AddressCard key={addr.id} address={addr.text} isDefault={addr.isDefault} />)}
                         <button className="w-full text-center p-6 border-4 border-dashed border-black rounded-xl hover:bg-gray-100 font-bold text-lg text-gray-800">
                            + Add New Address
                        </button>
                    </div>
                </div>
                <div className="md:col-span-1">
                    <div className="bg-white p-4 border-2 border-black rounded-xl">
                        <nav className="space-y-1">
                            <Link to="#/account" className="block font-semibold p-3 text-gray-800 rounded-lg hover:bg-yellow-100">&larr; Back to Account</Link>
                            <Link to="#/account/orders" className="block font-semibold p-3 text-gray-800 rounded-lg hover:bg-yellow-100">My Orders</Link>
                            <Link to="#/account/settings" className="block font-semibold p-3 text-gray-800 rounded-lg hover:bg-yellow-100">Account Settings</Link>
                        </nav>
                    </div>
                 </div>
             </div>
        </div>
    );
};

export default AddressesPage;