import React from 'react';
import ExploreCard from '../Explorecard/ExploreCard';
import './Explore.css'





const Explore = ({list, collectionName}) => {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {list.map((restaurant, i) => (
          <ExploreCard restaurant={restaurant} i={i} />
        ))}
      </div>
    </div>
  )
};

export default Explore;
