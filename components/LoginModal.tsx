import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const LoginModal: React.FC = () => {
    const { isLoginOpen, closeLogin, openSignup, login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    if (!isLoginOpen) return null;
    
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        login(email, password);
    };
    
    const switchToSignup = () => {
        closeLogin();
        openSignup();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={closeLogin}>
            <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md border-2 border-black" onClick={e => e.stopPropagation()}>
                 <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-extrabold text-black">Login</h2>
                    <button onClick={closeLogin} className="text-3xl font-bold">&times;</button>
                </div>
                <form onSubmit={handleLogin} className="mt-6 space-y-4">
                     <div>
                        <label className="block text-sm font-bold text-gray-700">Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full border-2 p-2.5 rounded-lg font-semibold border-black" required />
                    </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-700">Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-1 block w-full border-2 p-2.5 rounded-lg font-semibold border-black" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white font-bold text-lg py-3 px-6 border-2 border-black rounded-lg shadow-[6px_6px_0px_#000] hover:bg-blue-600">
                        Login
                    </button>
                </form>
                <p className="text-center mt-4">
                    Don't have an account? <button onClick={switchToSignup} className="font-bold text-blue-600 hover:underline">Sign Up</button>
                </p>
            </div>
        </div>
    );
};

export default LoginModal;