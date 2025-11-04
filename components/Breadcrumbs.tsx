import React from 'react';
import Link from './Link';
import StructuredData from './StructuredData';

interface BreadcrumbsProps {
  items: { name: string; path: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://khelaghor.com/${item.path}`
    }))
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
       <StructuredData data={breadcrumbSchema} />
      <ol className="flex items-center space-x-2 text-sm font-semibold">
        {items.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index > 0 && (
              <svg className="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            )}
            {index === items.length - 1 ? (
              <span className="text-gray-500" aria-current="page">{item.name}</span>
            ) : (
              <Link to={item.path} className="text-gray-600 hover:text-blue-600">{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
