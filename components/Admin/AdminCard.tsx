import React from 'react';
import Link from '../Link';

interface AdminCardProps {
    title?: string;
    children: React.ReactNode;
    viewAllLink?: string;
}

const AdminCard: React.FC<AdminCardProps> = ({ title, children, viewAllLink }) => {
    return (
        <div className="bg-white p-6 rounded-lg border-2 border-black text-gray-800">
            {(title || viewAllLink) && (
                 <div className="flex justify-between items-center mb-4 border-b-2 border-black pb-4">
                    {title && <h2 className="text-xl font-extrabold text-black">{title}</h2>}
                    {viewAllLink && (
                        <Link to={viewAllLink} className="text-sm font-medium text-blue-600 hover:underline">
                            View All &rarr;
                        </Link>
                    )}
                </div>
            )}
            <div>
                {children}
            </div>
        </div>
    );
};

export default AdminCard;