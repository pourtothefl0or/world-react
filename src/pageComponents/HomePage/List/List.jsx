import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Container } from '../../../components';

const List = ({ countries }) => {
  const push = useNavigate();

  return (
    <div>
      <StyledContainer>
        {countries.map(({ name, flags, capital, region, population, }, index) => {
          const img = flags.png;
          const officialName = name.official;
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
              name={officialName}
              info={info}
              onClick={() => push(`/details/${officialName}`)} />
          );
        })}
      </StyledContainer>
    </div>
  );
};

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 2rem;
`;

export default List;
