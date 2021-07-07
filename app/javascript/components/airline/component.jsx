import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { AirlineDetail, ReviewForm, Reviews} from './components';

const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Column = styled.div`
  background: #FFF;
  height: 100vh;
  overflow: auto;

  &:last-child {
    background: #000;
  }
`;

const Main = styled.div`
  padding-left: 20px;
`;

const Airline = () => {
  const { slug } = useParams();
  const airlineUrl = `/api/v1/airlines/${slug}`;
  const reviewsUrl = '/api/v1/reviews';
  const params = { include_reviews: true };

  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get(airlineUrl, { params })
      .then(response => {
        const { data } = response.data;

        setAirline(data);
        setLoaded(true);
      })
      .catch(error => console.error(error));
  }, [slug]);

  const handleChange = event => {
    const { target } = event || {};
    const { name, value } = target;

    event?.preventDefault();

    setReview({ ...review, [name]: value});
  };

  const handleSubmit = e => {
    e?.preventDefault();

    const body = {
      data: {
        ...review,
        airline_id: airline.id
      }
    }

    axios.post(reviewsUrl, body)
      .then(response => {
        const updatedReviews = [...airline.reviews, response.data.data];
        console.log(airline.reviews.map(airline => airline.score).reduce((acc, val) => acc + val, 0), airline.reviews.length);
        const updatedScore = updatedReviews.map(airline => airline.score).reduce((acc, val) => acc + val, 0) / updatedReviews.length;

        debugger;
        setAirline({
          ...airline,
          reviews: updatedReviews,
          score: Math.round(updatedScore * 100) / 100
        });
        setReview({});
      })
      .catch(error => console.error(error));;
  };

  const setRating = score => {
    setReview({ ...review, score });
    console.log(review);
  };

  const renderDetail = loaded && <AirlineDetail {...airline} />;

  return (
    <Wrapper>
      <Column>
        <Main>
          {renderDetail}
          <Reviews list={airline.reviews} />
        </Main>
      </Column>
      <Column>
        <ReviewForm airline={airline} handleChange={handleChange} handleSubmit={handleSubmit} review={review} setRating={setRating} />
      </Column>
    </Wrapper>
  )
};

export default Airline;
