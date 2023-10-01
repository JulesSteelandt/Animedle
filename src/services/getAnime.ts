import {ANIME, API, TOP} from '../config/constant';
import axios from 'axios';
// 43608
export const getTopAnime = () => {
  return axios
    .get(API + TOP + ANIME)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAnimeId = () => {
  const anime = getTopAnime();
};

export const getAnime = (id) => {
  return fetch(API + ANIME + id)
    .then((response) => {
      return response.data();
    })
    .catch((error) => {
      console.log(error);
    });
};
