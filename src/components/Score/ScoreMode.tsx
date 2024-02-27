interface Props {
  text:string
  score:number
}
export default function ScoreMode({text, score}:Props) {


  return (
    <p className={'font-Itim text-3xl text-mainText'}>{text} : {score}</p>
  );
}
