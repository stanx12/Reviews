import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Gray, Selected, Hover } from '../../../../images/stars';

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 10px 0 20px 0;
  border: 1px solid #E6E6E6;
  background: #FFF;
  margin-top: 10px;
`;

const RatingBox = styled.div`
  background: #FFF;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;

  input {
    display: none;
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml;charset=UTF-8, ${Gray}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8, ${Selected}");
  }

  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8, ${Hover}");
  }
`;

const Field = styled.div`
  border-radius: 4px;

  input {
    min-height: 50px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding 12px;
    width: 97%;
  }

  textarea {
    width: 97%;
    min-height: 80px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
  }
`;

const Wrapper = styled.div`
  background: #000;
  padding: 20px;
  height: 110vh;
  padding-top: 100px;
`;

const SubmitBtn = styled.button`
  background: #5A9007;
  color: #FFF;
  border-radius: 3px;
  padding: 12px;
  font-size: 18px;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  border: 3px solid #5A9007;
  width: 100%;
  margin-top: 20px;

  &:hover {
    background: #FFF;
    color: #5A9007;
    border: 3px solid #5A9007;
  }
`;

const Headline = styled.div`
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  color: #FFF;
`;

const RatingTitle = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const ReviewForm = ({ airline, handleSubmit, handleChange, review, setRating }) => {
  const { title, description, score } = review;
  const { name } = airline;
  const titleValue = title || '';
  const descriptionValue = description || '';

  const handleOnChange = event => handleChange(event);

  const ratingInput = [5, 4, 3, 2, 1].map(rating => {
    const id = `rating-${rating}`;
    const handleRatingChange = () => console.log(`selected: ${rating}`);
    const handleSetRating = () => setRating(rating);

    return (
      <Fragment key={rating}>
        <input type="radio" id={id} name="rating" checked={score === rating} value={rating} onChange={handleRatingChange} />
        <label onClick={handleSetRating}></label>
      </Fragment>
    )
  });

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Headline>Have an experience with {name}? Share a review!</Headline>
        <Field>
          <input onChange={handleOnChange} type="text" name="title" value={titleValue} placeholder="Review Title" />
          </Field>
        <Field>
          <input onChange={handleOnChange} type="text" name="description" value={descriptionValue} placeholder="Review Description" />
        </Field>
        <Field>
          <RatingContainer>
            <RatingTitle>Rate this Airline</RatingTitle>
            <RatingBox>
              {ratingInput}
            </RatingBox>
          </RatingContainer>
        </Field>
        <SubmitBtn type="submit">Submit Your Review</SubmitBtn>
      </form>
    </Wrapper>
  )
};

ReviewForm.propTypes = {
  airline: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  review: PropTypes.object,
  setRating: PropTypes.func
};

export default ReviewForm;
