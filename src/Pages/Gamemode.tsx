import ButtonGamemode from '../components/Button/ButtonGamemode.tsx';

function Gamemode() {
  return (
    <div className={'h-[90vh] bg-main'}>
      <div className={'flex h-[80vh] flex-col items-center justify-center'}>
        <ButtonGamemode text={'Classic'} />
        <ButtonGamemode text={'Guess'} />
      </div>
    </div>
  );
}

export default Gamemode;
