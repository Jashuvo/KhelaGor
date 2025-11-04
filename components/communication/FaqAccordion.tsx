import React, { useState } from 'react';

interface FaqAccordionProps {
    question: string;
    answer: string;
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-2 border-black rounded-xl">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 bg-white rounded-t-lg"
            >
                <h3 className="text-lg font-bold text-left">{question}</h3>
                <span className={`text-2xl font-bold transform transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
            </button>
            {isOpen && (
                <div className="p-4 bg-yellow-50 rounded-b-lg border-t-2 border-black">
                    <p className="text-gray-700">{answer}</p>
                </div>
            )}
        </div>
    );
};

export default FaqAccordion;
