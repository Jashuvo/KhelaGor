
import React from 'react';
import Link from '../Link';

interface NoResultsProps {
  query: string;
}

const NoResults: React.FC<NoResultsProps> = ({ query }) => {
  return (
    <div className="text-center py-16 bg-white border-2 border-black rounded-xl shadow-[8px_8px_0px_#000]">
      <h2 className="text-3xl font-extrabold text-black">No Results for "{query}"</h2>
      <p className="text-gray-600 mt-2">We couldn't find any toys matching your search.</p>
      <div className="mt-6">
        <h3 className="font-bold">Suggestions:</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>Make sure all words are spelled correctly.</li>
          <li>Try different keywords.</li>
          <li>Try more general keywords.</li>
        </ul>
      </div>
      <Link
        to="#/products"
        className="mt-8 inline-block bg-blue-500 text-white font-bold py-3 px-6 border-2 border-black rounded-lg shadow-[6px_6px_0px_#000] hover:bg-blue-600"
      >
        Browse All Toys
      </Link>
    </div>
  );
};

export default NoResults;
