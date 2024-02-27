import ButtonGame from '../Button/ButtonGame.tsx';

export default function InputAnime() {


  return (
    <div className={'space-x-5'}>
      <input className={'rounded-[20px] w-[45vh] font-Lemon text-inputText h-8 shadow-inner shadow-shadowInner px-2'} placeholder={'entrer le nom ici'}/>
      <ButtonGame text={'valider'}/>
    </div>
  );
}
