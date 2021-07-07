import React from 'react';
import PropTypes from 'prop-types';

import { Review } from './components';

const Reviews = ({ list }) => {

  if (!list || list.length <= 0) {
    return null;
  }

  const renderReviews = list.map(review => {
    return <Review key={review.id} { ...review } />
  });

  return renderReviews;
};

Reviews.propTypes = {
  list: PropTypes.array
};

export default Reviews;
