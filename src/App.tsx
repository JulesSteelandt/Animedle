import {getRandomAnimeId, getTopAnime} from './services/getAnime';
import {useEffect} from 'react';

function App() {
  useEffect(() => {
    // Fonction asynchrone pour effectuer l'appel à l'API
    getTopAnime().then((res) => {
      console.log(res.data);
    }),
      [];
  });

  return <p> start </p>;
}

export default App;
