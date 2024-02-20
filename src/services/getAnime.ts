import {ANIME, API} from '../config/constant';
import axios from 'axios';

const MAX: number = 10;
const MIN: number = 0;

// 43608
export const getTopAnime = () => {
  return axios
    .get(API + ANIME)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getRandomAnimeId = () => {
  const random = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  return getTopAnime().then((response) => {
    return getAnimeByID(response.data[random].mal_id);
  });
};

export const getAnimeByID = (id: number) => {
  return axios
    .get(`${API + ANIME}/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
