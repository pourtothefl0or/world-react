import React from 'react';
import styled from 'styled-components';
import { ArrowLeft } from '../../icons';

const ButtonBack = ({ title = 'Back', onClick }) => {
  return (
    <Root onClick={() => onClick()}>
      <ArrowLeft fill='var(--color-text)' />
      <Title>{title}</Title>
    </Root>
  );
};

const Root = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius);
  padding: 0.5rem;
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
`;

const Title = styled.p`
  margin: 0;
  padding-left: 0.5rem;
  font-weight: var(--fw-semibold);
  font-size: var(--fs-sm);
  color: var(--color-text);
`;

export default ButtonBack;
