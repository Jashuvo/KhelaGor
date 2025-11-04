import React from 'react';
import ReturnRequestForm from '../components/returns/ReturnRequestForm';

const ReturnsPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-4xl font-extrabold text-black text-center mb-8">Returns & Exchanges</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <ReturnRequestForm />
                </div>
                <div className="md:col-span-1">
                    <div className="bg-white p-6 border-2 border-black rounded-xl shadow-[8px_8px_0px_#000] space-y-4">
                        <h2 className="text-2xl font-bold text-black">Our Return Policy</h2>
                        <p className="text-gray-700">
                            We accept returns within 7 days of delivery. To be eligible for a return, your item must be unused, in the same condition that you received it, and in its original packaging.
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Contact us within 7 days.</li>
                            <li>Item must be unopened.</li>
                            <li>Provide proof of purchase.</li>
                        </ul>
                        <p className="text-gray-700">
                            For more details, please visit our full policy page or contact support.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReturnsPage;
