import React from 'react';

import './styles.css';

const Rating = ({ score }) => {
  const scorePercentage = (score / 5) * 100;

  return (
    <span className="star-wrapper">
      <span className="stars" style={{ width: scorePercentage + '%' }}></span>
    </span>
  )
};

Rating.propTypes = {

};

export default Rating;
