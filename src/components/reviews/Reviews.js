import React from 'react';
import Review from './Review';

const Reviews = props => {
  const restaurantReviews = props.reviews.filter(review => review.restaurant === props.restaurantId)

  const reviews = restaurantReviews.map(x => <Review key={x.id} review={x} deleteReview={props.deleteReview} />)
  
    return (
      <ul>
        {reviews}
      </ul>
    );
  }


export default Reviews;
