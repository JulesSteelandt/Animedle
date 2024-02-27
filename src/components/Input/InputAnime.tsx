import ButtonValidate from '../Button/ButtonValidate.tsx';

export default function InputAnime() {


  return (
    <div className={'my-7 flex space-x-5'}>
      <input placeholder={'entrer le nom ici'}/>
      <ButtonValidate />
    </div>
  );
}
