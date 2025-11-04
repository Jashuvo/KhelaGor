import React, { useState } from 'react';
import { Product } from '../../types';
import { PRODUCTS } from '../../data/products';
import { CATEGORIES } from '../../constants';
import AdminCard from '../../components/Admin/AdminCard';
import Link from '../../components/Link';

interface AdminProductEditPageProps {
    productId?: string;
}

const AdminProductEditPage: React.FC<AdminProductEditPageProps> = ({ productId }) => {
    const existingProduct = productId ? PRODUCTS.find(p => p.id === productId) : undefined;
    const [product, setProduct] = useState<Partial<Product>>(existingProduct || {
        name: '',
        brand: '',
        category: '',
        price: 0,
        stock: 0,
        description: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Saving product:', product);
        // Add API call logic here
    };

    return (
        <AdminCard>
            <h1 className="text-2xl font-semibold mb-6">{productId ? 'Edit Product' : 'Add New Product'}</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium">Product Name</label>
                        <input type="text" name="name" value={product.name} onChange={handleChange} className="mt-1 block w-full border-2 border-black rounded-md p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Brand</label>
                        <input type="text" name="brand" value={product.brand} onChange={handleChange} className="mt-1 block w-full border-2 border-black rounded-md p-2" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium">Category</label>
                    <select name="category" value={product.category} onChange={handleChange} className="mt-1 block w-full border-2 border-black rounded-md p-2 bg-white">
                        <option value="">Select a category</option>
                        {CATEGORIES.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
                    </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium">Price (৳)</label>
                        <input type="number" name="price" value={product.price} onChange={handleChange} className="mt-1 block w-full border-2 border-black rounded-md p-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Stock Quantity</label>
                        <input type="number" name="stock" value={product.stock} onChange={handleChange} className="mt-1 block w-full border-2 border-black rounded-md p-2" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium">Description</label>
                    <textarea name="description" value={product.description} onChange={handleChange} rows={5} className="mt-1 block w-full border-2 border-black rounded-md p-2" />
                </div>
                <div className="flex justify-end space-x-4">
                    <Link to="#/admin/products" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Cancel</Link>
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save Product</button>
                </div>
            </form>
        </AdminCard>
    );
};

export default AdminProductEditPage;