import React from 'react';

const Review = props => {

    const { review } = props;

    return (
      <div>
        <li>
          {review.text}

        <button onClick={() => props.deleteReview(review.id)}>Delete</button>
        </li>
      </div>
    );


};

export default Review;
