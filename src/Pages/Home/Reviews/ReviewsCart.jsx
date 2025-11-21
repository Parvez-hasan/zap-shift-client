import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewsCart = ({review}) => {
    const { userName , review: reviewText, user_photoURL } = review;
    return (
        <div className="max-w-md mx-auto p-6">
      <div className="card bg-base-100 shadow-md rounded-3xl p-8 border">

        {/* Quote Icon */}
        <div className="text-4xl text-gray-400">
          <FaQuoteLeft />
        </div>

        {/* Description */}
        <p className=" mt-4">
          {reviewText}
        </p>

        {/* Divider */}
        <div className="border-t border-dashed border-gray-300 my-6"></div>

        {/* Profile */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-teal-800">
            <img className='rounded-full' src={user_photoURL} alt="" />
          </div>

          <div>
            <h3 className="font-bold text-lg">{userName}</h3>
            <p className="text-gray-500 text-sm">Senior Product Designer</p>
          </div>
        </div>

      </div>
    </div>
    );
};

export default ReviewsCart;