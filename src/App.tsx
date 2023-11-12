import {getTopAnime} from './services/getAnime.ts';

function App() {

  getTopAnime().then((res) => {
    console.log(res.data);
  });

  return <p> start </p>;
}

export default App;
