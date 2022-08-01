import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { VARS } from '../../../../../constants';

const Tags = ({ data }) => {
  const push = useNavigate();

  return (
    <Root>
      {data?.map((el, index) =>
        <li key={index}>
          <Tag onClick={() => push(`/details/${el}`)}>{el}</Tag>
        </li>
      )}
    </Root>
  );
};

const Root = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Tag = styled.a`
  display: inline-block;
  border-radius: ${VARS.radius};
  padding: 0.5rem 1rem;
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
`;

export default Tags;
