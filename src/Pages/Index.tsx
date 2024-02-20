import img_accueil from '../assets/images/accueil.png';

function Index() {
  return (
    <div className={'h-[90vh] overflow-hidden bg-main'}>
      <section className={'flex h-full'}>
        <div className={'h-2/4 w-2/4'}>
          <img src={img_accueil} alt={"image de pleins d'anime"} className={'rounded-r-[1300px] bg-mainText '} />
        </div>
        <div className={'flex h-3/4 w-full items-center justify-center'}>
          <h1 className={'font-Itim text-9xl text-mainText drop-shadow-2xl'}>
            Bienvenue sur{' '}
            <p className={'font-Lemon'}>
              <b>
                <u>AnimeDle</u>
              </b>
            </p>
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Index;
