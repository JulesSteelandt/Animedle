interface Props {
  text:string
  score:number
}
export default function ScoreMode({text, score}:Props) {


  return (
    <p>{text} : {score}</p>
  );
}
