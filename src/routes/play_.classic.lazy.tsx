import {createLazyFileRoute} from '@tanstack/react-router';
import Classic from '../Pages/Classic.tsx';

export const Route = createLazyFileRoute('/play/classic')({
  component: page,
});

function page() {
 return <Classic/>;
}
