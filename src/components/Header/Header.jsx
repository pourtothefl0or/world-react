import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../';
import { TYPOGRAPHY } from '../../constants';
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
        <Logo to="/">Where is the world?</Logo>
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

const Logo = styled(Link)`
  font-weight: ${TYPOGRAPHY.weight.extrabold};
  font-size: ${TYPOGRAPHY.size.small};
  color: var(--color-text);
`;

export default Header;
