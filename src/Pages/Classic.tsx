import InputAnime from '../components/Input/InputAnime.tsx';
import ScoreMode from '../components/Score/ScoreMode.tsx';
import ImageClassic from '../components/Image/ImageClassic.tsx';
import LiveCount from '../components/Score/LiveCount.tsx';

export default function Classic() {
  return (
    <div className={'h-[90vh] bg-main'}>
      <div>
        <ScoreMode text={'Streak'} score={0} />
        <ScoreMode text={'Max Streak'} score={0} />
      </div>
      <div className={'flex flex-col'}>
        <div className={'flex'}>
          <ImageClassic />
          <LiveCount life={3} />
        </div>
        <div>
          <InputAnime />
        </div>
      </div>
    </div>
  );
}
 