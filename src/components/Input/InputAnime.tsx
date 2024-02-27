import ButtonValidate from '../Button/ButtonValidate.tsx';

export default function InputAnime() {


  return (
    <div className={'space-x-5'}>
      <input className={'rounded-[20px] w-[45vh] font-Lemon text-inputText h-8 shadow-inner shadow-shadowInner'} placeholder={'entrer le nom ici'}/>
      <ButtonValidate />
    </div>
  );
}
