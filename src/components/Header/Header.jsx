import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../';
import { Mode } from './components';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const handleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Root>
      <StyledContainer>
        <Link href="/">Where is the world?</Link>
        <Mode theme={theme} onClick={handleTheme} />
      </StyledContainer>
    </Root>
  );
};

const Root = styled.header`
  padding: 2rem 0;
  background-color: var(--color-bg);
  box-shadow: var(--shadow);
`;

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Link = styled.a`
  font-weight: var(--fw-extrabold);
  font-size: var(--fm-sm);
  color: var(--color-text);
`;

export default Header;
