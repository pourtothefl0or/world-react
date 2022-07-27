import React, { useState } from 'react';
import styled from 'styled-components';
import { Search, Select } from '../../../ui/components';
import { Container } from '../../../components';

const Controls = () => {
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');

  return (
    <div>
      <StyledContainer>
        <Search
          placeholder='Search for a country'
          value={search}
          onChange={setSearch} />
        <Select
          value={select}
          onChange={setSelect} />
      </StyledContainer>
    </div>
  );
};

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;

  & * {
    flex-basis: 300px;
  }
`;

export default Controls;
