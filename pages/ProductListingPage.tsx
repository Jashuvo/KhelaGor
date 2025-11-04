import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import Sidebar from '../components/Sidebar';
import ProductGrid from '../components/ProductGrid';
import Breadcrumbs from '../components/Breadcrumbs';
import { useLocation } from 'react-router-dom'; // Placeholder, will simulate with hash

const FilterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" /></svg>;

const ProductListingPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>(PRODUCTS);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState({
        category: '',
        brands: [] as string[],
        priceRange: [0, 20000] as [number, number],
        inStock: false,
    });
    const [sort, setSort] = useState('featured');
    
    // Simulate useLocation for hash routes
    useEffect(() => {
        const hash = window.location.hash;
        const params = new URLSearchParams(hash.split('?')[1]);
        const category = params.get('category');
        if (category) {
            setFilters(f => ({ ...f, category }));
        }
    }, []);


    const filteredAndSortedProducts = useMemo(() => {
        let filtered = PRODUCTS.filter(p => {
            const categoryMatch = filters.category ? p.category === filters.category : true;
            const brandMatch = filters.brands.length > 0 ? filters.brands.includes(p.brand) : true;
            const priceMatch = (p.salePrice ?? p.price) >= filters.priceRange[0] && (p.salePrice ?? p.price) <= filters.priceRange[1];
            const stockMatch = filters.inStock ? p.stock > 0 : true;
            return categoryMatch && brandMatch && priceMatch && stockMatch;
        });

        switch (sort) {
            case 'price-asc':
                filtered.sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
                break;
            case 'price-desc':
                filtered.sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
                break;
            case 'name-asc':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filtered.sort((a, b) => b.name.localeCompare(a.name));
                break;
            // 'featured' is default, no specific sort
        }

        return filtered;
    }, [filters, sort]);
    
    const breadcrumbItems = [
        { name: 'Home', path: '#/' },
        { name: 'All Toys', path: '#/products' },
    ];
    if (filters.category) {
        breadcrumbItems.push({ name: filters.category, path: `#/products?category=${filters.category}`})
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Breadcrumbs items={breadcrumbItems} />

            <div className="lg:hidden mb-4">
                 <button 
                    onClick={() => setIsFilterOpen(true)}
                    className="w-full flex items-center justify-center gap-2 bg-white text-black font-bold py-3 px-4 border-2 border-black rounded-lg shadow-[6px_6px_0px_#000]"
                 >
                    <FilterIcon />
                    Filters & Sort
                </button>
            </div>

            {/* Mobile Filter Modal */}
            {isFilterOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsFilterOpen(false)}>
                    <div className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-[#FAF4E5] p-4 overflow-y-auto transform transition-transform duration-300" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-4 pb-4 border-b-2 border-black">
                             <h2 className="text-2xl font-extrabold">Filters</h2>
                             <button onClick={() => setIsFilterOpen(false)} className="text-3xl font-bold">&times;</button>
                        </div>
                        <Sidebar
                            filters={filters}
                            setFilters={setFilters}
                            sort={sort}
                            setSort={setSort}
                        />
                         <button 
                            onClick={() => setIsFilterOpen(false)}
                            className="mt-6 w-full bg-blue-500 text-white font-bold py-3 rounded-lg border-2 border-black"
                        >
                            View Products
                        </button>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <aside className="hidden lg:block lg:col-span-1">
                    <Sidebar
                        filters={filters}
                        setFilters={setFilters}
                        sort={sort}
                        setSort={setSort}
                    />
                </aside>
                <main className="lg:col-span-3">
                    <ProductGrid products={filteredAndSortedProducts} />
                </main>
            </div>
        </div>
    );
};

export default ProductListingPage;