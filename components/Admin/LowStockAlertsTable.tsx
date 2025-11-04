
import React from 'react';
import { Product } from '../../types';
import Link from '../Link';

interface LowStockAlertsTableProps {
    products: Pick<Product, 'id' | 'name' | 'imageUrl' | 'stock' | 'category'>[];
}

const LowStockAlertsTable: React.FC<LowStockAlertsTableProps> = ({ products }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                 <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {products.map(product => (
                        <tr key={product.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img className="h-10 w-10 rounded-md object-cover" src={product.imageUrl} alt={product.name} />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">
                                            <Link to={`#/admin/product/edit/${product.id}`} className="hover:text-blue-600">
                                                {product.name}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {product.category}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="text-sm font-bold text-red-600">{product.stock} units</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LowStockAlertsTable;