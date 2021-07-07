import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Rating from '../../../rating';

const Card = styled.div`
  border: 1px solid #EFEFEF;
  background: #FFF;
`;

const AirlineLogo = styled.div`
  width: 50px;
  text-align: center;
  margin: 10px auto;

  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #EFEFEF;
  }
`;

const AirlineName = styled.div`
  padding: 20px 0 10px 0;
`;

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: #FFF;
    background-color: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1ps solid #000;
    width: 100%;
    text-decoration: none;
  }
`;

const AirlineGridDetail = ({ imageUrl, name, score, slug }) => {
  return (
    <Card>
      <AirlineLogo>
        <img src={imageUrl} alt={name} />
      </AirlineLogo>
      <AirlineName>{name}</AirlineName>
      <Rating score={score} />
      <LinkWrapper>
        <Link to={`/airlines/${slug}`}>View Airline</Link>
      </LinkWrapper>
    </Card>
  )
};

AirlineGridDetail.propTypes = {
  imageUrl: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired, 
  score: PropTypes.number.isRequired, 
  slug: PropTypes.string.isRequired
};

export default AirlineGridDetail;
