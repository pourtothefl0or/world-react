import React from 'react'
import styled from 'styled-components';

const Container = ({ className, children }) => {
  return (
    <Root className={className}>
      {children}
    </Root>
  );
};

const Root = styled.div`
  --padding: 15px;
  --max-width: 1240px;

  margin: 0 auto;
  padding: 0 var(--padding);
  max-width: calc(var(--max-width) + var(--padding) * 2);
`;

export default Container;
