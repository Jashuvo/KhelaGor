import React, { useState } from 'react';
import { useNotification } from '../contexts/NotificationContext';

interface WriteReviewModalProps {
  onClose: () => void;
}

const StarRatingInput: React.FC<{ rating: number, setRating: (r: number) => void }> = ({ rating, setRating }) => {
    return (
        <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <button
                        type="button"
                        key={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        className="text-4xl"
                    >
                        <span className={ratingValue <= rating ? 'text-yellow-400' : 'text-gray-300'}>&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
};

const WriteReviewModal: React.FC<WriteReviewModalProps> = ({ onClose }) => {
    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const { addNotification } = useNotification();
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically submit the review to a server
        console.log({ rating, title, text });
        addNotification('Thank you for your review!', 'success');
        onClose();
    };
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4" onClick={onClose}>
            <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg border-2 border-black" onClick={e => e.stopPropagation()}>
                 <div className="flex justify-between items-center border-b-2 border-black pb-4">
                    <h2 className="text-3xl font-extrabold text-black">Write a Review</h2>
                    <button onClick={onClose} className="text-3xl font-bold">&times;</button>
                </div>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <label className="block text-lg font-bold text-gray-700">Your Rating</label>
                        <StarRatingInput rating={rating} setRating={setRating} />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700">Review Title</label>
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="mt-1 block w-full border-2 p-2.5 rounded-lg font-semibold border-black" required />
                    </div>
                     <div>
                        <label className="block text-sm font-bold text-gray-700">Your Review</label>
                        <textarea value={text} onChange={e => setText(e.target.value)} rows={5} className="mt-1 block w-full border-2 p-2.5 rounded-lg font-semibold border-black" required />
                    </div>
                    <div className="pt-4 flex justify-end">
                        <button type="submit" className="w-full sm:w-auto bg-blue-500 text-white font-bold text-lg py-3 px-6 border-2 border-black rounded-lg shadow-[6px_6px_0px_#000] hover:bg-blue-600">
                            Submit Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WriteReviewModal;