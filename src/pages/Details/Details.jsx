import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../components';
import { MainLayout } from '../../layouts';
import { ButtonBack } from '../../ui/components';
import { filterByCode, searchByCountry } from '../../constants';
import { Info } from '../../pageComponents/DetailsPage';

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState({});
  const [neighbors, setNeighbors] = useState([]);

  useEffect(() => {
    axios
      .get(searchByCountry(name))
      .then(({ data }) => setCountry(data[0]));
  }, [name]);

  const { flags, nativeName, population, region, subregion, capital, currencies, languages, borders } = country;
  const img = flags?.png;

  const generalInfo = [
    {
      title: 'Native name',
      description: nativeName,
    },
    {
      title: 'Population',
      description: population,
    },
    {
      title: 'Region',
      description: region,
    },
    {
      title: 'Subregion',
      description: subregion,
    },
    {
      title: 'Capital',
      description: capital,
    },
  ];

  const secondaryInfo = [
    {
      title: 'Currencies',
      description: currencies,
    },
    {
      title: 'Languages',
      description: languages,
    },
  ];

  useEffect(() => {
    axios
      .get(filterByCode(borders))
      .then(({ data }) => setNeighbors((data.map(({ name }) => name))));
  }, [borders]);

  return (
    <MainLayout>
      <SubNav>
        <ButtonBack onClick={() => navigate(-1)} />
      </SubNav>
      <Info
        img={img}
        name={name}
        data={{ generalInfo, secondaryInfo }}
        tags={neighbors} />
    </MainLayout>
  );
};

const SubNav = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export default Details;
