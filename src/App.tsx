import img_accueil from './assets/images/accueil.png';
import NavBar from './components/navbar/Navbar.tsx';

function App() {
  return <div className={'bg-main h-screen overflow-hidden'}>
    <NavBar/>
    <section className={'flex'}>
      <div>
        <img src={img_accueil} alt={'image de pleins d\'anime'} className={'bg-mainText rounded-r-[1300px]'}/>
      </div>
      <div>
        <h1 className={'text-mainText font-Lemon text-8xl drop-shadow-2xl'}>Bienvenue sur <b><u>AnimeDle</u></b></h1>
      </div>
    </section>
  </div>;
}

export default App;
