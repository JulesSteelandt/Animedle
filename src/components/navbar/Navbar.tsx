import NavLink from './NavLink.tsx';

export default function NavBar(){
  return (
      <nav className={'bg-secondary p-5 drop-shadow-md'}>
        <h1 className={'text-mainText font-Lemon text-5xl drop-shadow-2xl'}><b>AnimeDle</b></h1>
        <NavLink/>
      </nav>
  );
}

