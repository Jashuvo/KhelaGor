import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  // Logic to create page numbers with ellipsis for large number of pages
  const createPagination = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, '...', totalPages];
    }
    if (currentPage > totalPages - 4) {
      return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  const pages = createPagination();

  const baseClasses = "flex items-center justify-center px-4 h-10 font-bold border-2 border-black transition-colors duration-200";
  const defaultClasses = "bg-white text-black hover:bg-yellow-200";
  const activeClasses = "bg-blue-500 text-white shadow-[3px_3px_0_black]";
  const disabledClasses = "bg-gray-200 text-gray-500 cursor-not-allowed";

  return (
    <nav className="flex items-center justify-center space-x-2" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${baseClasses} rounded-lg ${currentPage === 1 ? disabledClasses : defaultClasses + ' shadow-[3px_3px_0_black]'}`}
      >
        Prev
      </button>

      {pages.map((page, index) =>
        typeof page === 'number' ? (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`${baseClasses} rounded-full ${currentPage === page ? activeClasses : defaultClasses}`}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="flex items-center justify-center px-4 h-10 text-black">
            {page}
          </span>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${baseClasses} rounded-lg ${currentPage === totalPages ? disabledClasses : defaultClasses + ' shadow-[3px_3px_0_black]'}`}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
