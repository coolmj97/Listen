import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
`;

const InfoSection = styled.section`
  padding: 24px;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  @media screen and (min-width: 992px) {
    justify-content: center;
  }
`;

const AlbumArtWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin-right: 20px;
  @media screen and (min-width: 992px) {
    width: 180px;
    height: 180px;
    margin-right: 80px;
  }
`;

const AlbumArt = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: contain;
`;

const InfoDate = styled.span`
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  @media screen and (min-width: 992px) {
    font-size:16px;
`;

const InfoTitle = styled.span`
  display: block;
  @media screen and (min-width: 992px) {
    font-size: 24px;
`;

const InfoArtistWrapper = styled.div`
  display: flex;
  justify-content: space-center;
  align-items: center;
  margin: 12px 0;
`;

const InfoArtistImg = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  margin-right: 12px;
  border-radius: 50%;
  object-fit: contain;
  box-shadow: 0px 0px 15px 1px #333333;
  @media screen and (min-width: 992px) {
    width: 80px;
  height: 80px;
`;

const InfoArtist = styled.span`
  display: block;
  @media screen and (min-width: 992px) {
    font-size:18px;
`;

const LikeButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LikeButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  cursor: pointer;
`;

const Icon = styled.i`
  color: #48e5c2;
  font-size: 20px;
`;

const LikeNumber = styled.span`
  color: #fcfaf9;
  font-size: 16px;
`;

const VideoSection = styled.section`
  padding: 0 24px;
  margin-bottom: 24px;
`;

const Title = styled.span`
  display: inline-block;
  margin-bottom: 12px;
  font-size: 18px;
`;

const MusicInfo = ({ selectedInfo }) => {
  const data = selectedInfo[0];
  const [like, setLike] = useState(false);
  const [number, setNumber] = useState(0);

  return (
    <Section>
      <InfoSection>
        <InfoWrapper>
          <AlbumArtWrapper>
            <AlbumArt src={data.albumArt} alt={data.albumTitle} />
          </AlbumArtWrapper>

          <div>
            <InfoDate>{data.releaseDate}</InfoDate>
            <InfoTitle>{data.albumTitle}</InfoTitle>
            <InfoArtistWrapper>
              <InfoArtistImg src={data.artistImg} alt="" />
              <InfoArtist>{data.artist}</InfoArtist>
            </InfoArtistWrapper>
          </div>
        </InfoWrapper>

        <LikeButtonWrapper>
          <LikeButton
            type="button"
            onClick={() => {
              if (like === false) {
                setNumber(number + 1);
              } else {
                setNumber(number - 1);
              }
              setLike(!like);
            }}
          >
            {like ? (
              <Icon className="fas fa-heart"></Icon>
            ) : (
              <Icon className="far fa-heart"></Icon>
            )}
          </LikeButton>
          <LikeNumber>{number}</LikeNumber>
        </LikeButtonWrapper>
      </InfoSection>

      <VideoSection>
        <Title>영상</Title>
        {data.video}
      </VideoSection>
    </Section>
  );
};

export default MusicInfo;
