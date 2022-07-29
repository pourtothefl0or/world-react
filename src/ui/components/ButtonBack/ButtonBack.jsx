import React from 'react';
import styled from 'styled-components';
import { ArrowLeft } from '../../icons';
import { TYPOGRAPHY, VARS } from '../../../constants';

const ButtonBack = ({ title = 'Back', onClick }) => {
  return (
    <Root onClick={() => onClick()}>
      <ArrowLeft fill='var(--color-text)' />
      <Title>{title}</Title>
    </Root>
  );
};

const Root = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: ${VARS.radius};
  padding: 0.5rem 1rem;
  background: var(--color-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
`;

const Title = styled.p`
  margin: 0;
  padding-left: 0.5rem;
  font-weight: ${TYPOGRAPHY.weight.extrabold};
  font-size: ${TYPOGRAPHY.size.small};
  color: var(--color-text);
`;

export default ButtonBack;
