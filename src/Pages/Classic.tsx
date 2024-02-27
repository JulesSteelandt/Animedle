import InputAnime from '../components/Input/InputAnime.tsx';
import ScoreMode from '../components/Score/ScoreMode.tsx';
import ImageClassic from '../components/Image/ImageClassic.tsx';
import LiveCount from '../components/Score/LiveCount.tsx';
import {useState} from 'react';
import WinText from '../components/Score/WinText.tsx';
import ButtonGame from '../components/Button/ButtonGame.tsx';

export default function Classic() {

  const [maxStreak, setMaxStreak] = useState(0);
  const [streak, setStreak] = useState(0);
  const [life, setLife] = useState(3);
  const [animeName, setAnimeName] = useState('test');
  const [win, setWin] = useState(false);
  const [finish, setFinish] = useState(false);

  return (
    <div className={'h-[90vh] bg-main'}>
      <div className={'p-3'}>
        <ScoreMode text={'Streak'} score={streak} />
        <ScoreMode text={'Max Streak'} score={maxStreak} />
      </div>
      <div className={'flex flex-col items-center'}>
        <div className={'flex pb-3'}>
          <ImageClassic />
          <LiveCount life={life} />
        </div>

        {finish ? (
          <div className={'text-center font-Itim text-white text-3xl'}>
            <WinText win={win} />
            <p>Réponse : </p>
            <p className={'pb-3'}>{animeName}</p>
            {win ? (
            <ButtonGame text={'suivant'}/>
            ) : (
              <ButtonGame text={'recommencez'}/>
            )}
          </div>
        ) : (
          <div>
            <InputAnime />
          </div>
        )}
      </div>
    </div>
  );
}
 