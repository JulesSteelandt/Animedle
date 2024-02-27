import heart from '../../assets/images/heart-icon.png';

interface Props {
  life:number
}
export default function LiveCount({life}:Props) {


  return (
    <div className={'flex items-end'}>
      <img src={heart} alt={'heart'} width={50} height={50} />
      <span className={'font-Lemon text-white'}>x{life}</span>
    </div>
  );
}
