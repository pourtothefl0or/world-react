import React from 'react';
import { MainLayout } from '../../layouts';
import { Controls, List } from '../../pageComponents/HomePage';

const Home = ({ onSearch, countries }) => {
  return (
    <MainLayout>
      <Controls onSearch={onSearch} />
      <List countries={countries} />
    </MainLayout>
  );
};

export default Home;
