
interface props {
  text:string
}
export default function ButtonGame({text}:props) {


  return (
      <button className={'font-Itim text-2xl text-secondary bg-button px-2 rounded-[22px] shadow-dropCustom'}>
        {text}
      </button>
  );
}
