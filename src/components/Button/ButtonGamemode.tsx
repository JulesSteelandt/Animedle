import {Link} from '@tanstack/react-router';
import {useState} from 'react';

type Props = {
  text: string;
  link: string;
};

export default function ButtonGamemode({text, link}: Props) {
  const [anime, setAnime] = useState<boolean>(false);

  const setAnimeProps = (isAnime: boolean) => {
    setAnime(isAnime);
  };

  return (
    <div>
      <Link>
        <button>{text}</button>
      </Link>
    </div>
  );
}
