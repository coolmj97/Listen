import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Li = styled.li`
  width: 100%;
  padding: 28px 24px;
  background-color: #333333;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: 1px solid #48e5c2;
  }
`;

const AlbumArtWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 12px;
  @media screen and (min-width: 992px) {
    width: 70px;
    height: 70px;
  }
`;

const AlbumArt = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const MusicInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  @media screen and (min-width: 992px) {
    font-size: 20px;
  }
`;

const Artist = styled.span`
  margin: 8px 0 0 0;
  font-size: 14px;
  @media screen and (min-width: 992px) {
    font-size: 16px;
  }
`;

const Music = ({ playList, handleMusic }) => {
  return (
    <>
      <Li id={playList.id} onClick={handleMusic}>
        <AlbumArtWrapper>
          <AlbumArt src={playList.albumArt} alt={playList.title} />
        </AlbumArtWrapper>

        <MusicInfo>
          <Title>{playList.title}</Title>
          <Artist>{playList.artist}</Artist>
        </MusicInfo>
      </Li>
    </>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleMusic: () =>
      dispatch({
        type: 'AUTOPLAY',
        selectedList: ownProps.playList,
        isPlaying: true,
      }),
  };
}

export default connect(null, mapDispatchToProps)(Music);
