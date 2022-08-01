import React from 'react';
import styled from 'styled-components';
import { TYPOGRAPHY } from '../../../../../constants';

const List = ({ className, data }) => {
  return (
    <ul className={className}>
      {data?.map(({ title, description }, index) =>
        Array.isArray(description)
          ? (
            <Item key={index}>
              <Text>
                <span>{title}:</span> {description.map(({ code, name }) => code || name)}
              </Text>
            </Item>
            )
          : (
            <Item key={index}>
              <Text><span>{title}:</span> {description}</Text>
            </Item>
            )
      )}
    </ul>
  );
};

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const Text = styled.p`
  margin: 0;
  font-weight: ${TYPOGRAPHY.weight.light};
  font-size: ${TYPOGRAPHY.size.light};
  color: var(--color-text);

  span {
    font-weight: ${TYPOGRAPHY.weight.semibold};
  }
`;

export default List;
