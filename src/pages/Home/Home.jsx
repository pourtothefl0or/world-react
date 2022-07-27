import { useEffect, useState } from 'react';
import axios from 'axios';
import { MainLayout } from '../../layouts';
import { Controls, List } from '../../pageComponents/Home';
import { ALL_COUNTRIES } from '../../constants/config';

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(ALL_COUNTRIES)
      .then(({ data }) => setCountries(data));
  }, [countries]);

  return (
    <MainLayout>
      <Controls />
      <List countries={countries} />
    </MainLayout>
  );
};

export default Home;
