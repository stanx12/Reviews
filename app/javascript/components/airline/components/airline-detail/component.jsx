import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;
  font-size: 30px;

  img {
    height: 60px;
    width: 60px;
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: -8px;
    margin-right: 10px;
  }

  h1 {
    display: flex;
  }
`;

const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`;

const TotalOutOf = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`;

const AirlineDetail = ({ name, image_url: imageUrl, reviews, score }) => {
  const totalReviews = reviews.length;

  return (
    <Wrapper>
      <h1><img src={imageUrl} alt={name} />{name}</h1>
      <div>
        <TotalReviews>{totalReviews} User Reviews</TotalReviews>
        <div className="starRating"></div>
        <TotalOutOf>{score} out of 5</TotalOutOf>
      </div>
    </Wrapper>
  )
};

AirlineDetail.propTypes = {
  image_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  reviews: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
};

export default AirlineDetail;
