import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Search, Select } from '../../../ui/components';
import { Container } from '../../../components';

const Controls = ({ onSearch }) => {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    onSearch(search, region);
  },[search, region]);

  return (
    <div>
      <StyledContainer>
        <Search
          placeholder='Search for a country'
          value={search}
          onChange={setSearch} />
        <Select
          placeholder='Filter by region'
          value={region}
          options={regions}
          onChange={setRegion} />
      </StyledContainer>
    </div>
  );
};

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;

  & * {
    flex-basis: 300px;
  }
`;

export default Controls;
