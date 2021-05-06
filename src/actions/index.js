import axios from 'axios';
import { FETCH_SHOW, FETCH_EPISODES, FETCH_EPISODE } from '../constants';

const baseURL = 'http://api.tvmaze.com';

export const fetchShow = (id) => async (dispatch) => {
  const { data } = await axios.get(`${baseURL}/shows/${id}`);
  dispatch({ type: FETCH_SHOW, show: data });
};

export const fetchEpisode = (id) => async (dispatch) => {
  const { data } = await axios.get(`${baseURL}/episodes/${id}`);
  dispatch({ type: FETCH_EPISODE, episode: data });
};

export const fetchEpisodes = (id) => async (dispatch) => {
  const { data } = await axios.get(`${baseURL}/shows/${id}/episodes`);
  dispatch({ type: FETCH_EPISODES, episodes: data.slice(0, 6) });
};
