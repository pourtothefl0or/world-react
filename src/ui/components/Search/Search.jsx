import React from 'react';
import styled from 'styled-components';
import { VARS } from '../../../constants';
import { Loupe } from '../../icons';

const Search = ({ value, onChange, ...props }) => {
  return (
    <Root>
      <Loupe fill='var(--color-text)' />
      <Field
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props} />
    </Root>
  );
};

const Root = styled.label`
  display: block;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    left: 0.5rem;
    transform: translateY(-50%);
    cursor: text;
  }
`;

const Field = styled.input`
  margin: 0;
  border: none;
  border-radius: ${VARS.radius};
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  width: 100%;
  min-height: 50px;
  background-color: var(--color-ui-base);
  color: var(--color-text);
  box-shadow: var(--shadow);

  &::placeholder {
    color: var(--color-text);
  }
`;

export default Search;
