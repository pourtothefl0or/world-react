import React from 'react';
import styled from 'styled-components';
import { Dark, Light } from '../../../../ui/icons';

const Mode = ({ theme, onClick }) => {
  return (
    <Root onClick={() => onClick()}>
      {theme === 'light'
        ? <><Dark fill='var(--color-text)' /> {theme}</>
        : <><Light fill='var(--color-text)' /> {theme}</>}
    </Root>
  );
};

const Root = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: var(--fw-extrabold);
  font-size: var(--fm-sm);
  text-transform: capitalize;
  color: var(--color-text);
`;

export default Mode;
