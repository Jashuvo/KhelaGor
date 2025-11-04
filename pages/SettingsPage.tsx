
import React from 'react';
import Link from '../components/Link';
import { useAuth } from '../contexts/AuthContext';

const SettingsInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & {label: string}> = ({ label, ...props }) => (
     <div>
        <label className="block text-sm font-bold text-gray-700">{label}</label>
        <input {...props} className="mt-1 block w-full border-2 p-2.5 rounded-lg font-semibold border-black" />
    </div>
);

const SettingsPage: React.FC = () => {
    const { user } = useAuth();
    
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
             <h1 className="text-4xl font-extrabold text-black mb-8">Account Settings</h1>
            
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="md:col-span-2">
                     <div className="bg-white p-8 border-2 border-black rounded-xl shadow-[8px_8px_0px_#000] space-y-8">
                        {/* Profile Info Form */}
                        <form className="space-y-4">
                            <h2 className="text-2xl font-bold text-black">Profile Information</h2>
                            <SettingsInput label="Full Name" type="text" defaultValue={user?.name} />
                            <SettingsInput label="Email Address" type="email" defaultValue={user?.email} />
                             <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-5 border-2 border-black rounded-lg shadow-[4px_4px_0px_#000] hover:bg-blue-600">
                                Save Changes
                            </button>
                        </form>
                        
                        <hr className="border-dashed border-gray-300" />
                        
                         {/* Change Password Form */}
                        <form className="space-y-4">
                             <h2 className="text-2xl font-bold text-black">Change Password</h2>
                            <SettingsInput label="Current Password" type="password" />
                            <SettingsInput label="New Password" type="password" />
                            <SettingsInput label="Confirm New Password" type="password" />
                            <button type="submit" className="bg-yellow-300 text-black font-bold py-2 px-5 border-2 border-black rounded-lg shadow-[4px_4px_0px_#000] hover:bg-yellow-400">
                                Update Password
                            </button>
                        </form>
                     </div>
                 </div>
                 <div className="md:col-span-1">
                     <div className="bg-white p-4 border-2 border-black rounded-xl">
                        <nav className="space-y-1">
                            <Link to="#/account" className="block font-semibold p-3 text-gray-800 rounded-lg hover:bg-yellow-100">&larr; Back to Account</Link>
                            <Link to="#/account/orders" className="block font-semibold p-3 text-gray-800 rounded-lg hover:bg-yellow-100">My Orders</Link>
                            <Link to="#/account/addresses" className="block font-semibold p-3 text-gray-800 rounded-lg hover:bg-yellow-100">My Addresses</Link>
                        </nav>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default SettingsPage;
