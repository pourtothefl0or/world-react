import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../components';
import { MainLayout } from '../../layouts';
import { ButtonBack } from '../../ui/components';

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <MainLayout>
      <SubNav>
        <ButtonBack onClick={() => navigate(-1)} />
      </SubNav>
      <h2>{name}</h2>
    </MainLayout>
  );
};

const SubNav = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export default Details;
