
import React from 'react';

interface FilterChipsProps {
  filters: { [key: string]: any };
  onRemoveFilter: (filterKey: string, value?: any) => void;
}

const FilterChips: React.FC<FilterChipsProps> = ({ filters, onRemoveFilter }) => {
  const activeFilters = Object.entries(filters).filter(([, value]) => {
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === 'boolean') return value;
    return !!value;
  });

  if (activeFilters.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {activeFilters.map(([key, value]) => {
        if (Array.isArray(value)) {
          return value.map(v => (
            <div key={`${key}-${v}`} className="flex items-center bg-gray-200 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
              <span>{key}: {v}</span>
              <button onClick={() => onRemoveFilter(key, v)} className="ml-2 font-bold">&times;</button>
            </div>
          ));
        }
        return (
          <div key={key} className="flex items-center bg-gray-200 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
            <span>{key}</span>
            <button onClick={() => onRemoveFilter(key)} className="ml-2 font-bold">&times;</button>
          </div>
        );
      })}
    </div>
  );
};

export default FilterChips;
