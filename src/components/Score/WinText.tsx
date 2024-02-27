interface Props {
  win: boolean;
}

export default function WinText({win}: Props) {

  return (
    win ? (
        <h1 className={'font-Lemon text-winColor text-5xl'}>Bravo</h1>
      )
      :
      (
        <h1 className={'font-Lemon text-loseColor text-5xl'}>Perdu</h1>
      )
  )
    ;
}
