export default function Rules() {
  return (
    <div className={'flex h-[90vh] items-center justify-center bg-main text-white'}>
      <div className='max-w-2xl rounded-lg bg-secondary p-8 shadow-md'>
        <h2 className='mb-4 font-Lemon text-3xl'>Comment jouer :</h2>

        <section className='mb-8'>
          <h3 className='mb-2 font-Lemon text-xl'>Classic :</h3>
          <p className='font-Itim text-xl'>
            Le mode Classic consiste à deviner le titre d'un anime ou d'un manga à partir de son affiche flouté. Vous
            avez 3 vies, et chaque mauvaise réponse vous en fait perdre une. Si vous perdez toutes vos vies, vous perdez
            la partie.
          </p>
        </section>
        <section>
          <h3 className='mb-2 font-Lemon text-xl'>Guess :</h3>
          <p className='font-Itim text-xl'>
            Le mode Guess consiste à deviner le titre d'un anime ou d'un manga à partir des informations fournis. Vous
            avez 7 vies, chaque anime que vous rentrez vous donnera des indices sur l'anime que vous devez deviner à
            l'aide de son studio, ses dates... Si vous perdez toutes vos vies, vous perdez la partie.
          </p>
        </section>
      </div>
    </div>
  );
}
