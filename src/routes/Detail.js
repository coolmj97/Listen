import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MusicInfo from '../components/MusicInfo';
import Comment from '../components/Comment';

const Section = styled.section`
  padding: 0 0 100px 0;
  @media screen and (min-width: 992px) {
    width: 80%;
    padding: 0 90px;
  }
`;

const BackButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  margin: 12px 12px 24px 12px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 992px) {
    width: 40px;
  height: 40px;
`;

const BackButtonImg = styled.img`
  width: 20px;
  height: 20px;
  @media screen and (min-width: 992px) {
    width: 40px;
    height: 40px;
  }
`;

const Detail = ({ allData, selectedId }) => {
  const filtered = allData.filter((data) => data.id === selectedId);

  return (
    <>
      <Link to="/">
        <BackButton type="button">
          <BackButtonImg src="./assets/image/back.png" alt="go back" />
        </BackButton>
      </Link>

      <Section>
        <MusicInfo selectedInfo={filtered} />
        <Comment />
      </Section>
    </>
  );
};

function mapStateToProps(store) {
  return {
    allData: store.musicData,
    selectedId: store.handleDetail,
  };
}

export default connect(mapStateToProps)(Detail);
