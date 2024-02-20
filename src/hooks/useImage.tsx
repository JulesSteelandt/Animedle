import {useEffect, useState} from 'react';
import {API_ANIME, API_URL} from '../utils/appConsts';

export default function useImage() {

  useEffect(() => {
    fetch(`${API_URL}${API_ANIME}/43608`)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        console.log(error);
      }).then((data) => {
        console.log(data.data.images.webp.image_url);
      }
    );
  }, []);

}
