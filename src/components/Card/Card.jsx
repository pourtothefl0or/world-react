import React from 'react';
import styled from 'styled-components';

const Card = ({ img, name, info = [], onClick }) => {
  return (
    <Root onClick={() => onClick()}>
      <ImageWrapper>
        <Image src={img} alt={name} />
      </ImageWrapper>
      <Body>
        <Title>{name}</Title>
        <ul>
          {info.map(({ title, description }, index) =>
            <Item key={index}>
              <Text><span>{title}:</span> {description}</Text>
            </Item>
          )}
        </ul>
      </Body>
    </Root>
  );
};

const Root = styled.div`
  overflow: hidden;
  border-radius: var(--radius);
  background-color: var(--color-ui-base);
  cursor: pointer;

  &:hover {
    box-shadow: var(--shadow);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Body = styled.div`
  padding: 1rem;
`;

const Title = styled.h2`
  margin: 0 0 1rem;
  font-weight: var(--fw-extrabold);
  font-size: var(--fs-md);
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const Text = styled.p`
  margin: 0;
  font-weight: var(--fw-light);
  font-size: var(--fz-sm);

  span {
    font-weight: var(--fw-semibold);
  }
`;

export default Card;
