import { createStore, combineReducers } from 'redux';

const musicData = (state = initialState.data) => {
  return state;
};

const handleMusic = (state = initialState.nowPlaying, action) => {
  switch (action.type) {
    case 'AUTOPLAY':
      return {
        ...state,
        id: action.selectedList.id,
        audio: action.selectedList.audio,
        album: action.selectedList.albumArt,
        isPlaying: action.isPlaying,
      };

    case 'TOGGLE_MUSIC':
      return {
        ...state,
        isPlaying: action.isPlaying,
      };

    case 'PREVIOUS':
      const prev = initialState.data.filter(
        (item) => item.id === action.id - 1
      );
      const prevObj = prev[0];
      return {
        ...state,
        id: prevObj.id,
        audio: prevObj.audio,
        album: prevObj.albumArt,
        isPlaying: action.isPlaying,
      };

    case 'NEXT':
      const next = initialState.data.filter(
        (item) => item.id === action.id + 1
      );
      const nextObj = next[0];
      return {
        ...state,
        id: nextObj.id,
        audio: nextObj.audio,
        album: nextObj.albumArt,
        isPlaying: action.isPlaying,
      };

    default:
      return state;
  }
};

const handleDetail = (state = 1, action) => {
  switch (action.type) {
    case 'GET_ID':
      return action.id;
    default:
      return state;
  }
};

const handleComment = (state = initialState.comments, action) => {
  switch (action.type) {
    case 'SUBMIT':
      return [...state, { id: action.id, text: action.text }];
    case 'DELETE':
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

const initialState = {
  data: [
    {
      id: 1,
      albumTitle: 'CATNIP',
      title: 'Grace',
      artist: 'ADOY',
      releaseDate: '2017.05.17',
      albumArt: './assets/image/grace.jpg',
      artistImg: './assets/image/adoy.jpg',
      audio: './assets/music/adoy.mp3',
      video: (
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/TS87gVP8iFo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      id: 2,
      albumTitle: 'Right Through Me',
      title: '뚫고 지나가요',
      artist: `DAY6 (Even of Day)`,
      releaseDate: '2021.07.05',
      albumArt: './assets/image/뚫고지나가요.jpg',
      artistImg: './assets/image/eod.jpg',
      audio: './assets/music/eod.mp3',
      video: (
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/ZbIeVvPg7CQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      id: 3,
      albumTitle: `Aren't You?`,
      title: 'The Lights Behind You',
      artist: 'SURL',
      releaseDate: '2018.12.06',
      albumArt: './assets/image/설.jpg',
      artistImg: './assets/image/surl.jpg',
      audio: './assets/music/surl.mp3',
      video: (
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/ecgp5SZgKHU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      id: 4,
      albumTitle: 'love + everything else',
      title: '긴 꿈',
      artist: '새소년',
      releaseDate: '2017.06.20',
      albumArt: './assets/image/긴꿈.jpg',
      artistImg: './assets/image/새소년.jpg',
      audio: './assets/music/새소년.mp3',
      video: (
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/pgm4VRxMcew"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    },
    {
      id: 5,
      albumTitle: 'Alone',
      title: '憧憬 / Doukei (동경)',
      artist: 'iwamizu',
      releaseDate: '2017.11.13',
      albumArt: './assets/image/동경.jpg',
      artistImg: './assets/image/iwamizu.jpg',
      audio: './assets/music/iwamizu.mp3',
      video: (
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/eRUrjbAbszw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
    },
  ],

  nowPlaying: {
    album: './assets/image/noimage.jpg',
    isPlaying: false,
  },

  comments: [],
};

const store = createStore(
  combineReducers({ musicData, handleMusic, handleDetail, handleComment }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
