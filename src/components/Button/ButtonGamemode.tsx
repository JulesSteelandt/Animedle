import {Link} from '@tanstack/react-router';
import {useState} from 'react';
import SwitchGamemode from '../Switch/SwitchGamemode.tsx';

type Props = {
  text: string;
  link: string;
};

export default function ButtonGamemode({text, link}: Props) {
  const [anime, setAnime] = useState<boolean>(false);

  const setAnimeProps = (isAnime: boolean) => {
    setAnime(isAnime);
  };

  console.log(anime);

  return (
    <div className={'my-7 flex space-x-5'}>
      <Link
        className={
          'bg-button shadow-button_sh flex h-16 w-64 items-center justify-center rounded-2xl text-5xl shadow-[0_0_25px_6px]'
        }
        to={link}
      >
        <button className={'font-Lemon text-secondary'}>{text}</button>
      </Link>

      <SwitchGamemode anime={anime} setAnime={setAnimeProps} />
    </div>
  );
}
