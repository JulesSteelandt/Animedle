import {Link} from '@tanstack/react-router';

export default function NavBar() {
  return (
    <nav className={'flex h-[10vh] w-full items-center space-x-10 bg-secondary p-5 drop-shadow-md'}>
      <Link to='/'>
        <h1 className={'font-Lemon text-5xl text-mainText drop-shadow-2xl'}>
          <b>AnimeDle</b>
        </h1>
      </Link>
      <Link className={'font-Lemon text-2xl text-mainText drop-shadow-2xl'} to='/play'>
        jouer
      </Link>
      <Link className={'font-Lemon text-2xl text-mainText drop-shadow-2xl'} to='/rules'>
        règles
      </Link>
    </nav>
  );
}
