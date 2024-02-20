import {Link} from '@tanstack/react-router';
import {useState} from 'react';

type Props = {
  text: string;
  link: string;
};

export default function SwitchGamemode({anime}: Props) {
  const [anime, setAnime] = useState();

  return (
    <div>
      <Link>
        <button>{text}</button>
      </Link>
    </div>
  );
}
