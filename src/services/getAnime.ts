import {ANIME, API, MANGA, TOP} from '../config/constant';

// 43608
export const getTopAnime = () => {
  return fetch(API + TOP + ANIME)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAnimeId = () => {
  const anime = getTopAnime();
};

export const getAnime = (id) => {
  return axios
    .get(API + ANIME + id)
    .then((response) => {
      return response.data();
    })
    .catch((error) => {
      console.log(error);
    });
};
