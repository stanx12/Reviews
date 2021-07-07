import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Rating from '../../../../../rating';

const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px;
  margin: 0 20px 20px 0;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RatingScore = styled.div``;

const Title = styled.div`
  padding: 20px 0 0 0;
  font-size: 18px;
`;

const Description = styled.div`
  padding: 0 0 20px 0;
  font-size: 14px;
`;

const Review = ({ title, description, score }) => {
  return (
    <Card>
      <i className="fas fa-user"></i>
      <RatingContainer>
        <Rating score={score} />
      </RatingContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  )
};

Review.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
};

export default Review;
