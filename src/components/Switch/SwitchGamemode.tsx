import {Switch} from '@mui/material';

type Props = {
  anime: boolean;
  setAnime: (isAnime: boolean) => void;
};

export default function SwitchGamemode({anime, setAnime}: Props) {
  const handleToggle = () => {
    setAnime(!anime);
  };

  return (
    <div className='flex items-center'>
      <Switch
        checked={anime}
        onChange={handleToggle}
        sx={{
          '& .MuiSwitch-track': {
            backgroundColor: '#EAE8FF',
          },
          '& .MuiSwitch-thumb': {
            backgroundColor: anime ? '#2D3142' : '#EAE8FF',
          },
          '&.Mui-checked .MuiSwitch-thumb': {
            backgroundColor: anime ? '#2D3142' : '#EAE8FF',
          },
        }}
      />
      <div className='ml-2'>
        <span className='font-Lemon text-4xl text-secondaryText'>{anime ? 'Manga' : 'Anime'}</span>
      </div>
    </div>
  );
}
