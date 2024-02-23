import {useState} from 'react';

type Props = {
  anime: boolean;
};

export default function SwitchGamemode({anime}: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='flex items-center'>
      <div className='relative'>
        <input type='checkbox' id='toggle' checked={isChecked} onChange={handleToggle} className='sr-only' />
        <div
          className={`h-4 w-10 rounded-full bg-gray-400 shadow-inner transition duration-300 ease-in-out ${
            isChecked ? 'bg-green-500' : ''
          }`}
        >
          <div
            className={`absolute inset-y-0 left-0 h-6 w-6 rounded-full bg-white shadow ${
              isChecked ? 'translate-x-full transform' : ''
            }`}
          />
        </div>
      </div>
      <label htmlFor='toggle' className='ml-3'>
        {anime ? 'Anime' : 'Manga'}
      </label>
    </div>
  );
}
