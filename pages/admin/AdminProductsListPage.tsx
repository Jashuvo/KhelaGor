
import React, { useState } from 'react';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../types';
import AdminCard from '../../components/Admin/AdminCard';
import Link from '../../components/Link';

const AdminProductsListPage: React.FC = () => {
    const [products] = useState<Product[]>(PRODUCTS);

    return (
        <AdminCard>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold">All Products</h1>
                <Link to="#/admin/products/new" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Add New Product
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Stock</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {products.map(product => (
                            <tr key={product.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">৳{product.price.toLocaleString()}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className={product.stock < 10 ? 'text-red-600 font-bold' : 'text-gray-800'}>
                                        {product.stock}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link to={`#/admin/product/edit/${product.id}`} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminCard>
    );
};

export default AdminProductsListPage;
