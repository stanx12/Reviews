import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { AirlineGridDetail } from './components';

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  padding: 50px 100px 10px 100px;

  h1 {
    font-size: 42px;
  }
`;

const SubHeader = styled.div`
  font-weigh: 300;
  font-size: 26px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`;

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/airlines')
      .then(response => {
        const { data } = response.data;

        setAirlines(data);
      })
      .catch(error => console.error(error))
  }, []);

  const list = airlines.map(({ image_url: imageUrl, name, score, slug }) => {
    return <AirlineGridDetail key={name} imageUrl={imageUrl} name={name} score={score} slug={slug} />
  });

  return (
    <Home>
      <Header>
        <h1>Open Flights</h1>
        <SubHeader>Honest, unbiased airline reviews.</SubHeader>
      </Header>
      <Grid>
        {list}
      </Grid>
    </Home>
  )
}

export default Airlines;
