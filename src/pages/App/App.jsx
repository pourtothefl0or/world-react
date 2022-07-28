import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Details } from '../'
import { ALL_COUNTRIES } from '../../constants/config';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    if (!countries.length) {
      axios
        .get(ALL_COUNTRIES)
        .then(({ data }) => {
          setCountries(data);
          setFilteredCountries(data);
        });
    }
  }, []);

  const handleSearch = (search, region) => {
    let data = [...countries];

    if (search) {
      data = data.filter((el) => el.name.official.toLowerCase().includes(search.toLowerCase()));
    }

    if (region) {
      data = data.filter((el) => el.region.includes(region));
    }

    setFilteredCountries(data);
  };

  return(
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={<Home countries={filteredCountries} onSearch={handleSearch} />} />
        <Route
          path='/details/:name'
          element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
