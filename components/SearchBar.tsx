
import React, { useState } from 'react';

const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            window.location.hash = `#/search?q=${encodeURIComponent(query.trim())}`;
        }
    };
    
    return (
        <form onSubmit={handleSearch} className="relative w-full">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for amazing toys..."
                className="w-full bg-white border-2 border-black rounded-full px-5 py-3 font-semibold placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <button type="submit" className="absolute right-0 top-0 h-full px-5 text-gray-500 hover:text-black">
                <SearchIcon />
            </button>
        </form>
    );
};

export default SearchBar;
