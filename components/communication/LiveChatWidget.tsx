import React, { useState } from 'react';

const ChatIcon = () => <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;

const LiveChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-5 right-5 bg-blue-500 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center z-20 border-2 border-black"
                aria-label="Open live chat"
            >
                <ChatIcon />
            </button>
        );
    }
    
    return (
        <div className="fixed bottom-5 right-5 z-20 w-80 h-96 bg-white rounded-lg shadow-xl border-2 border-black flex flex-col">
            <div className="bg-blue-500 text-white p-3 flex justify-between items-center rounded-t-md">
                <h3 className="font-bold">Chat with us!</h3>
                <button onClick={() => setIsOpen(false)} className="font-bold text-xl">&times;</button>
            </div>
            <div className="flex-1 p-3 overflow-y-auto">
                {/* Chat messages would go here */}
                <p className="text-sm bg-gray-200 p-2 rounded-lg self-start">Hi! How can we help you today?</p>
            </div>
            <div className="p-2 border-t-2 border-black">
                <input type="text" placeholder="Type your message..." className="w-full border-2 border-gray-300 rounded p-2" />
            </div>
        </div>
    );
};

export default LiveChatWidget;
