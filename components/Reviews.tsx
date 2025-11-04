import React, { useState } from 'react';
import { REVIEWS } from '../data/reviews';
import WriteReviewModal from './WriteReviewModal';

interface ReviewsProps {
  productId: string;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-5 h-5 ${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
        ))}
    </div>
);


const Reviews: React.FC<ReviewsProps> = ({ productId }) => {
  const reviews = REVIEWS.filter(r => r.productId === productId);
  const [showReviewModal, setShowReviewModal] = useState(false);

  if (reviews.length === 0) {
    return (
        <div className="text-center">
            <p className="text-gray-600">There are no reviews for this product yet.</p>
             <button
                onClick={() => setShowReviewModal(true)}
                className="mt-4 bg-blue-500 text-white font-bold py-2 px-5 border-2 border-black rounded-lg shadow-[4px_4px_0px_#000] hover:bg-blue-600"
            >
                Be the first to write a review
            </button>
            {showReviewModal && <WriteReviewModal onClose={() => setShowReviewModal(false)} />}
        </div>
    );
  }

  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <div>
        <div className="flex flex-col sm:flex-row items-center gap-8 mb-8 pb-6 border-b-2 border-dashed border-black">
            <div className="text-center">
                <p className="text-5xl font-extrabold">{averageRating.toFixed(1)}</p>
                <StarRating rating={averageRating} />
                <p className="text-sm text-gray-500 mt-1">Based on {reviews.length} reviews</p>
            </div>
            <div className="flex-grow w-full">
                {/* Rating breakdown would go here */}
            </div>
             <button
                onClick={() => setShowReviewModal(true)}
                className="bg-blue-500 text-white font-bold py-3 px-6 border-2 border-black rounded-lg shadow-[6px_6px_0px_#000] hover:bg-blue-600"
            >
                Write a Review
            </button>
        </div>
        
        <div className="space-y-6">
            {reviews.map(review => (
                <div key={review.id} className="border-b-2 border-dotted pb-6">
                    <div className="flex items-center">
                        <StarRating rating={review.rating} />
                        <h4 className="ml-4 text-lg font-extrabold">{review.title}</h4>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                        By <span className="font-semibold text-gray-800">{review.author}</span> on {new Date(review.date).toLocaleDateString()}
                    </p>
                    {review.isVerified && <p className="text-xs font-bold text-green-600">✓ Verified Purchase</p>}
                    <p className="mt-3 text-gray-700">{review.text}</p>
                </div>
            ))}
        </div>
        {showReviewModal && <WriteReviewModal onClose={() => setShowReviewModal(false)} />}
    </div>
  );
};

export default Reviews;
