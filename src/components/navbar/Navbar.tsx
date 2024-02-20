import {Link} from '@tanstack/react-router';

export default function NavBar() {
  return (
    <nav className={'flex bg-secondary p-5 drop-shadow-md'}>
      <Link to='/'>
        <h1 className={'font-Lemon text-5xl text-mainText drop-shadow-2xl'}>
          <b>AnimeDle</b>
        </h1>
      </Link>
      <Link to='/about'>About</Link>
    </nav>
  );
}
