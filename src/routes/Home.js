import React from 'react';
import styled from 'styled-components';
import Slide from '../components/Slide';
import Playlist from '../components/Playlist';

const Section = styled.section`
  width: 100%;
  @media screen and (min-width: 992px) {
    width: 75%;
  }
`;

const Title = styled.h1`
  padding: 8px;
  margin-bottom: 32px;
  background-color: #5E5E5E
  font-size: 30px;
  font-family: 'Dancing Script', cursive;
  @media screen and (min-width: 992px) {
    font-size: 50px;
  }
`;

const Home = () => {
  return (
    <Section>
      <Title>Listen !</Title>
      <Slide />
      <Playlist />
    </Section>
  );
};

export default Home;
