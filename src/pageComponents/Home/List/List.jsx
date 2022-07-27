import React from 'react';
import styled from 'styled-components';
import { Card, Container } from '../../../components';

const List = ({ countries = [] }) => {
  return (
    <div>
      <StyledContainer>
        {countries.map(({ name, flags, capital, region, population, }, index) => {
          const img = flags.png;
          const title = name.official;
          const info = [
            {
              title: 'Population',
              description: population,
            },
            {
              title: 'Capital',
              description: capital,
            },
            {
              title: 'Region',
              description: region,
            },
          ];

          return (
            <Card
              key={index}
              img={img}
              name={title}
              info={info} />
          );
        })}
      </StyledContainer>
    </div>
  );
};

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export default List;
