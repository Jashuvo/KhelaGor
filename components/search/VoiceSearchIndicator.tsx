
import React from 'react';

interface VoiceSearchIndicatorProps {
    isListening: boolean;
}

const VoiceSearchIndicator: React.FC<VoiceSearchIndicatorProps> = ({ isListening }) => {
    if (!isListening) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col justify-center items-center">
            <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 bg-blue-400 rounded-full animate-ping"></div>
            </div>
            <p className="text-white text-2xl font-bold mt-8">Listening...</p>
        </div>
    );
};

export default VoiceSearchIndicator;
