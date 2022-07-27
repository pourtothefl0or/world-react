import React from 'react';
import styled from 'styled-components';
import { ArrowDown } from '../../icons';

const Select = ({ value, onChange, ...props }) => {
  return (
    <Root>
      <ArrowDown fill='var(--color-text)' />
      <Field
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...props}>
        <option hidden>Filter by region</option>
        <option>Value 1</option>
        <option>Value 2</option>
        <option>Value 3</option>
      </Field>
    </Root>
  );
};

const Root = styled.label`
  display: block;
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
    cursor: text;
  }
`;

const Field = styled.select`
  margin: 0;
  border: none;
  border-radius: var(--radius);
  padding: 0.5rem 2.5rem 0.5rem 1rem;
  width: 100%;
  min-height: 50px;
  background-color: var(--color-ui-base);
  color: var(--color-text);
  box-shadow: var(--shadow);
  appearance: none;
`;

export default Select;
