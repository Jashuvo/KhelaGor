
import React, { useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import NoResults from '../components/search/NoResults';
import Link from '../components/Link';

interface SearchResultsPageProps {
  query: string;
}

const SearchResultsPage: React.FC<SearchResultsPageProps> = ({ query }) => {
  const searchResults = useMemo(() => {
    if (!query) return [];
    const lowerCaseQuery = query.toLowerCase();
    return PRODUCTS.filter(
      p =>
        p.name.toLowerCase().includes(lowerCaseQuery) ||
        p.category.toLowerCase().includes(lowerCaseQuery) ||
        p.brand.toLowerCase().includes(lowerCaseQuery) ||
        p.description.toLowerCase().includes(lowerCaseQuery)
    );
  }, [query]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold text-black mb-2">
        Search Results for: "{query}"
      </h1>
      <p className="text-gray-600 mb-8">
        Found {searchResults.length} {searchResults.length === 1 ? 'toy' : 'toys'}.
      </p>

      {searchResults.length > 0 ? (
        <ProductGrid products={searchResults} />
      ) : (
        <NoResults query={query} />
      )}
        <div className="mt-8">
             <Link to="#/products" className="font-bold text-blue-600 hover:underline">
                &larr; Back to All Toys
            </Link>
        </div>
    </div>
  );
};

export default SearchResultsPage;
