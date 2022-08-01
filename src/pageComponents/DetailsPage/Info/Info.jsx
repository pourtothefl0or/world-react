import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../components';
import { TYPOGRAPHY } from '../../../constants';
import { List, Tags } from './components';

const Info = ({ img, name, data, tags }) => {
  return (
    <div>
      <StyledContainer>
        <ImageWrapper>
          <Image src={img} alt={name} />
        </ImageWrapper>
        <TextWrapper>
          <Title>{name}</Title>
          <ListWrapper>
            <List data={data.generalInfo} />
            <List data={data.secondaryInfo} />
          </ListWrapper>
          <Tags data={tags} />
        </TextWrapper>
      </StyledContainer>
    </div>
  );
};

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ImageWrapper = styled.div`
  @media (min-width: 768px) {
    flex-basis: 55%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  @media (min-width: 768px) {
    flex-basis: 40%;
  }
`;

const Title = styled.h2`
  margin: 0 0 1rem;
  font-weight: ${TYPOGRAPHY.weight.extrabold};
  font-size: ${TYPOGRAPHY.size.middle};
  color: var(--color-text);
`;

const ListWrapper = styled.div`
  margin-bottom: 1rem;

  & >:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export default Info;
