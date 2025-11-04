import React, { useState, useRef, useEffect } from 'react';

interface MultiSelectDropdownProps {
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
}

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ options, selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter(item => item !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  const displayText = selectedOptions.length > 0
    ? `${selectedOptions.length} selected`
    : "Select Brands";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-white border-2 border-black rounded-lg px-4 py-2.5 font-semibold shadow-[4px_4px_0px_#000] hover:shadow-[5px_5px_0px_#000] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
      >
        <span>{displayText}</span>
        <ChevronDownIcon />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border-2 border-black rounded-lg shadow-lg max-h-60 overflow-auto">
          <ul className="py-1">
            {options.map(option => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 cursor-pointer hover:bg-yellow-100 flex items-center text-gray-800"
              >
                <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    readOnly
                    className="h-4 w-4 rounded border-2 border-black text-blue-600 focus:ring-blue-500 mr-3"
                />
                <span className="font-medium">{option}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;