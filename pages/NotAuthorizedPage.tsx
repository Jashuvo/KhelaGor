
import React from 'react';
import Link from '../components/Link';

const NotAuthorizedPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
             <div className="max-w-md mx-auto bg-white p-8 border-2 border-black rounded-xl shadow-[8px_8px_0px_#000]">
                <h1 className="text-9xl font-extrabold text-red-500">403</h1>
                <h2 className="text-3xl font-extrabold text-black mt-4">Access Denied</h2>
                <p className="text-gray-600 mt-2">You do not have permission to view this page. Please log in as an authorized user to continue.</p>
                <Link
                    to="#/"
                    className="mt-8 block w-full bg-blue-500 text-white font-bold py-3 px-6 border-2 border-black rounded-lg shadow-[6px_6px_0px_#000] hover:bg-blue-600 transition-all"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotAuthorizedPage;
