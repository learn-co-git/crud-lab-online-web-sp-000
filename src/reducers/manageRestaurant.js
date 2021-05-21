import cuid from 'cuid';

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
    const restaurant = {
      id: cuid(),
      text: action.text
    }
    return {...state, restaurants: [...state.restaurants, restaurant]}

    case 'DELETE_RESTAURANT':
      return {...state, restaurants: state.restaurants.filter(x => x.id !== action.id)}

    case 'ADD_REVIEW':
      const review = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      }
      return {...state, reviews: [...state.reviews, review]}

      case 'DELETE_REVIEW':
      return {...state, reviews: state.reviews.filter(x => x.id !== action.id)}

      default:
        return state;
  }

}
