import ButtonGamemode from '../components/Button/ButtonGamemode.tsx';

export default function Gamemode() {
  return (
    <div className={'h-[90vh] bg-main'}>
      <div className={'flex h-[80vh] flex-col items-center justify-center'}>
        <ButtonGamemode text={'Classic'} link={'classic'} />
        <ButtonGamemode text={'Guess'} link={'ok'} />
      </div>
    </div>
  );
}
 