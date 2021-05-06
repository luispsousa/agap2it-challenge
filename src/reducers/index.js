import { FETCH_SHOW, FETCH_EPISODES, FETCH_EPISODE } from '../constants';

const initialState = {
  episodes: [],
  show: {},
  episode: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_SHOW:
      return { ...state, show: action.show };
    case FETCH_EPISODES:
      return { ...state, episodes: action.episodes };
    case FETCH_EPISODE:
      return { ...state, episode: action.episode };
    default:
      return state;
  }
};
