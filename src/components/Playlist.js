import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Music from './Music';

const Title = styled.h2`
  padding: 8px;
  margin: 60px 0 12px 0;
  font-size: 20px;
  @media screen and (min-width: 992px) {
    font-size: 24px;
  }
`;

const Ul = styled.ul`
  padding: 0 0 100px 0;
`;

const Playlist = ({ allData }) => {
  return (
    <>
      <Title>재생목록</Title>
      <Ul>
        {allData.map((item) => (
          <Music key={item.id} playList={item} />
        ))}
      </Ul>
    </>
  );
};

function mapStateToProps(store) {
  return {
    allData: store.musicData,
  };
}

export default connect(mapStateToProps)(Playlist);
