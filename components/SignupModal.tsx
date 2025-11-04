import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const SignupModal: React.FC = () => {
    const { isSignupOpen, closeSignup, openLogin, signup } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!isSignupOpen) return null;

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        signup(name, email, password);
    };

    const switchToLogin = () => {
        closeSignup();
        openLogin();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={closeSignup}>
            <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md border-2 border-black" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-extrabold text-black">Sign Up</h2>
                    <button onClick={closeSignup} className="text-3xl font-bold">&times;</button>
                </div>
                <form onSubmit={handleSignup} className="mt-6 space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700">Name</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full border-2 p-2.5 rounded-lg font-semibold border-black" required />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700">Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full border-2 p-2.5 rounded-lg font-semibold border-black" required />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700">Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-1 block w-full border-2 p-2.5 rounded-lg font-semibold border-black" required />
                    </div>
                    <button type="submit" className="w-full bg-yellow-300 text-black font-bold text-lg py-3 px-6 border-2 border-black rounded-lg shadow-[6px_6px_0px_#000] hover:bg-yellow-400">
                        Create Account
                    </button>
                </form>
                <p className="text-center mt-4">
                    Already have an account? <button onClick={switchToLogin} className="font-bold text-blue-600 hover:underline">Login</button>
                </p>
            </div>
        </div>
    );
};

export default SignupModal;