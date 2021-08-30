import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactAudioPlayer from 'react-audio-player';
import AudioSpectrum from 'react-audio-spectrum';
import '../style/AudioSpectrum.css';

const Section = styled.section`
  width: 100%;
  padding: 16px;
  background-color: #5e5e5e;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -5px 20px 0px #000000;
  @media screen and (min-width: 992px) {
    width: 25%;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #95f2d9;
  }
`;

const NpImgWrapper = styled.div`
  width: 50px;
  height: 50px;
  @media screen and (min-width: 992px) {
    width: 150px;
    height: 150px;
    margin-bottom: 48px;
  }
`;

const NpImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 2px #333333;
  @media screen and (min-width: 992px) {
    box-shadow: 0px 0px 5px 2px #41463d;
  }
`;

const ButtonsWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 992px) {
    width: 100%;
    justify-content: space-around;
    margin: 100px 0;
  }
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  padding: 0;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  cursor: pointer;
`;

const Icon = styled.i`
  color: #fcfaf9;
  font-size: 28px;
  @media screen and (min-width: 992px) {
    color: #2f2f2f;
  }
`;

const Control = ({ selectedData, onPlayPause, onPrev, onNext }) => {
  const isPlaying = selectedData.isPlaying;
  let audioRef;

  return (
    <Section>
      <NpImgWrapper>
        <NpImg src={selectedData.album} alt="현재곡" />
      </NpImgWrapper>

      <AudioSpectrum
        id="audio-canvas"
        audioId={'audio-element'}
        width={80}
        height={80}
        capColor={'false'}
        capHeight={0}
        meterWidth={2}
        meterCount={512}
        meterColor={[
          { stop: 0, color: '#17BEBB' },
          { stop: 0.5, color: '#8884FF' },
          { stop: 1, color: '#8884FF' },
        ]}
        gap={2}
      />

      <ButtonsWrapper>
        {/* 이전곡 */}
        <Button
          type="button"
          onClick={() => {
            if (selectedData.id === 1) {
              return;
            }
            onPrev(selectedData.id);
          }}
          aria-label="이전곡"
        >
          <Icon className="fas fa-step-backward"></Icon>
        </Button>

        {/* 재생/일시정지 */}
        <Button
          type="button"
          onClick={() => {
            if (selectedData.audio === undefined) {
              return;
            }
            if (isPlaying === false) {
              audioRef.audioEl.current.play();
            } else {
              audioRef.audioEl.current.pause();
            }
            onPlayPause(isPlaying);
          }}
          aria-label="재생/일시정지"
        >
          {isPlaying ? (
            <Icon className="fas fa-pause"></Icon>
          ) : (
            <Icon className="fas fa-play"></Icon>
          )}
        </Button>

        {/* 다음곡 */}
        <Button
          type="button"
          onClick={() => {
            if (selectedData.id === 5) {
              return;
            }
            onNext(selectedData.id);
          }}
          aria-label="다음곡"
        >
          <Icon className="fas fa-step-forward"></Icon>
        </Button>
      </ButtonsWrapper>

      {/* 오디오 */}
      <ReactAudioPlayer
        id="audio-element"
        src={selectedData.audio}
        ref={(element) => {
          audioRef = element;
        }}
        onEnded={onPlayPause}
        volume={0.2}
        autoPlay
      ></ReactAudioPlayer>
    </Section>
  );
};

function mapStateToProps(store) {
  return {
    selectedData: store.handleMusic,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onPlayPause: (isPlaying) =>
      dispatch({
        type: 'TOGGLE_MUSIC',
        isPlaying: !isPlaying,
      }),

    onPrev: (id) =>
      dispatch({
        type: 'PREVIOUS',
        isPlaying: true,
        id,
      }),

    onNext: (id) =>
      dispatch({
        type: 'NEXT',
        isPlaying: true,
        id,
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Control);
