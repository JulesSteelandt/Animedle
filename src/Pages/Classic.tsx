import ButtonValidate from '../components/Button/ButtonValidate.tsx';
import InputAnime from '../components/Input/InputAnime.tsx';
import ScoreMode from '../components/Score/ScoreMode.tsx';

export default function Classic() {
  return (
    <div className={'h-[90vh] bg-main'}>
      <div>
        <ScoreMode text={'Streak'} score={0} />
        <ScoreMode text={'Max Streak'} score={0} />
      </div>
      <div>
        <ButtonValidate />
        <InputAnime />
      </div>
    </div>
  );
}
 