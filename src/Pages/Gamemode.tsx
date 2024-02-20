import ButtonGamemode from '../components/Button/ButtonGamemode.tsx';

function Gamemode() {
  return (
    <div className={'h-[90vh] overflow-hidden bg-main'}>
      <ButtonGamemode text={'Classic'} />
      <ButtonGamemode text={'Guess'} />
    </div>
  );
}

export default Gamemode;
