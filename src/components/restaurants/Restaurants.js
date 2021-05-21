import React from 'react';
import Restaurant from './Restaurant'

const Restaurants = props => {
  const restaurants = props.restaurants.map(x => <Restaurant key={x.id} restaurant={x} deleteRestaurant={props.deleteRestaurant}/> )
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }


export default Restaurants;
