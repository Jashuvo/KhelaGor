import React, { useCallback, useEffect, useState, useRef } from 'react';

interface PriceRangeSliderProps {
    min: number;
    max: number;
    values: [number, number];
    onChange: (values: [number, number]) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ min, max, values, onChange }) => {
    const [minVal, setMinVal] = useState(values[0]);
    const [maxVal, setMaxVal] = useState(values[1]);
    const minValRef = useRef(values[0]);
    const maxValRef = useRef(values[1]);
    const range = useRef<HTMLDivElement>(null);
    const minInputRef = useRef<HTMLInputElement>(null);
    const maxInputRef = useRef<HTMLInputElement>(null);
    
    // Convert to percentage
    const getPercent = useCallback((value: number) => Math.round(((value - min) / (max - min)) * 100), [min, max]);

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    const handleMouseUp = () => {
        onChange([minVal, maxVal]);
    };
    
    const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value === '' ? min : Number(e.target.value);
        const validatedValue = Math.max(min, Math.min(value, maxVal - 1));
        setMinVal(validatedValue);
        minValRef.current = validatedValue;
    }
    
    const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value === '' ? max : Number(e.target.value);
        const validatedValue = Math.min(max, Math.max(value, minVal + 1));
        setMaxVal(validatedValue);
        maxValRef.current = validatedValue;
    }

    const handleInputBlur = () => {
        onChange([minVal, maxVal]);
    }

    return (
        <div>
            <div className="relative h-2 my-4">
                <div className="absolute rounded-md bg-gray-300 h-2 w-full"></div>
                <div ref={range} className="absolute rounded-md bg-blue-500 h-2"></div>
                
                <input
                    ref={minInputRef}
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={(event) => {
                        const value = Math.min(Number(event.target.value), maxVal - 1);
                        setMinVal(value);
                        minValRef.current = value;
                    }}
                    onMouseUp={handleMouseUp}
                    onTouchEnd={handleMouseUp}
                    onMouseDown={() => {
                        if (minInputRef.current) minInputRef.current.style.zIndex = '5';
                        if (maxInputRef.current) maxInputRef.current.style.zIndex = '4';
                    }}
                    className="absolute w-full h-2 opacity-0 cursor-pointer"
                    style={{ zIndex: 4 }}
                />
                 <input
                    ref={maxInputRef}
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    onChange={(event) => {
                        const value = Math.max(Number(event.target.value), minVal + 1);
                        setMaxVal(value);
                        maxValRef.current = value;
                    }}
                    onMouseUp={handleMouseUp}
                    onTouchEnd={handleMouseUp}
                     onMouseDown={() => {
                        if (maxInputRef.current) maxInputRef.current.style.zIndex = '5';
                        if (minInputRef.current) minInputRef.current.style.zIndex = '4';
                    }}
                    className="absolute w-full h-2 opacity-0 cursor-pointer"
                    style={{ zIndex: 5 }}
                />
                
                <div className="absolute -top-1.5 pointer-events-none" style={{ left: `calc(${getPercent(minVal)}% - 8px)` }}>
                    <div className="w-5 h-5 bg-white border-2 border-black rounded-full shadow-[2px_2px_0_black]"></div>
                </div>
                <div className="absolute -top-1.5 pointer-events-none" style={{ left: `calc(${getPercent(maxVal)}% - 8px)` }}>
                    <div className="w-5 h-5 bg-white border-2 border-black rounded-full shadow-[2px_2px_0_black]"></div>
                </div>
            </div>

            <div className="flex justify-between items-center mt-8">
                <div className="relative border-2 border-black rounded-md bg-white w-28 text-center">
                    <span className="absolute -top-2.5 left-2 bg-white px-1 text-xs font-bold text-gray-500">Min</span>
                    <span className="absolute top-1/2 left-2 -translate-y-1/2 font-bold text-black">৳</span>
                    <input 
                        type="number"
                        value={minVal}
                        onChange={handleMinInputChange}
                        onBlur={handleInputBlur}
                        min={min}
                        max={max - 1}
                        className="w-full font-bold text-black text-center bg-transparent pl-5 pr-1 py-2 focus:outline-none"
                    />
                </div>
                 <div className="relative border-2 border-black rounded-md bg-white w-28 text-center">
                    <span className="absolute -top-2.5 left-2 bg-white px-1 text-xs font-bold text-gray-500">Max</span>
                    <span className="absolute top-1/2 left-2 -translate-y-1/2 font-bold text-black">৳</span>
                    <input 
                        type="number"
                        value={maxVal}
                        onChange={handleMaxInputChange}
                        onBlur={handleInputBlur}
                        min={min + 1}
                        max={max}
                        className="w-full font-bold text-black text-center bg-transparent pl-5 pr-1 py-2 focus:outline-none"
                    />
                </div>
            </div>
        </div>
    );
};

export default PriceRangeSlider;