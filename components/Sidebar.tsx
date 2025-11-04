import React from 'react';
import { CATEGORIES } from '../constants';
import { PRODUCTS } from '../data/products';
import PriceRangeSlider from './PriceRangeSlider';
import MultiSelectDropdown from './MultiSelectDropdown';

interface SidebarProps {
    filters: any;
    setFilters: (filters: any) => void;
    sort: string;
    setSort: (sort: string) => void;
}

const allBrands = [...new Set(PRODUCTS.map(p => p.brand))];

const FilterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="py-6 border-b-2 border-dashed border-black">
        <h3 className="font-extrabold text-xl text-black mb-4">{title}</h3>
        {children}
    </div>
);

const Sidebar: React.FC<SidebarProps> = ({ filters, setFilters, sort, setSort }) => {
    const handleCategoryChange = (category: string) => {
        setFilters((prev: any) => ({ ...prev, category }));
    };

    const handleBrandChange = (brands: string[]) => {
        setFilters((prev: any) => ({ ...prev, brands }));
    };

    const handlePriceChange = (values: [number, number]) => {
        setFilters((prev: any) => ({ ...prev, priceRange: values }));
    };
    
    const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilters((prev: any) => ({ ...prev, inStock: e.target.checked }));
    };

    return (
        <div className="bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_#000] p-6 sticky top-28 text-gray-800">
            <FilterSection title="Sort By">
                 <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="w-full bg-white border-2 border-black rounded-lg px-4 py-2.5 font-semibold shadow-[4px_4px_0px_#000] focus:outline-none"
                >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                </select>
            </FilterSection>
            
            <FilterSection title="Categories">
                <ul className="space-y-2">
                    <li
                        onClick={() => handleCategoryChange('')}
                        className={`font-semibold cursor-pointer p-1 rounded ${!filters.category ? 'text-blue-600' : 'hover:text-blue-500'}`}
                    >
                        All Toys
                    </li>
                    {CATEGORIES.map(cat => (
                        <li key={cat.name}
                            onClick={() => handleCategoryChange(cat.name)}
                            className={`font-semibold cursor-pointer p-1 rounded ${filters.category === cat.name ? 'text-blue-600' : 'hover:text-blue-500'}`}
                        >
                            {cat.name}
                        </li>
                    ))}
                </ul>
            </FilterSection>

            <FilterSection title="Price Range">
                <PriceRangeSlider min={0} max={20000} values={filters.priceRange} onChange={handlePriceChange} />
            </FilterSection>
            
             <FilterSection title="Brands">
                <MultiSelectDropdown options={allBrands} selectedOptions={filters.brands} onChange={handleBrandChange} />
            </FilterSection>

            <FilterSection title="Availability">
                 <label className="flex items-center cursor-pointer">
                    <input type="checkbox" checked={filters.inStock} onChange={handleStockChange} className="h-5 w-5 rounded border-2 border-black text-blue-600 focus:ring-blue-500" />
                    <span className="ml-3 font-semibold text-black">In Stock Only</span>
                </label>
            </FilterSection>

        </div>
    );
};

export default Sidebar;