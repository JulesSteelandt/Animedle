import {createLazyFileRoute} from '@tanstack/react-router';
import Gamemode from '../Pages/Gamemode.tsx';

export const Route = createLazyFileRoute('/play')({
  component: page,
});

function page() {
  return <Gamemode />;
}
